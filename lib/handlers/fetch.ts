import { RequestError } from "../http-errors";
import logger from "../logger";
import handleError from "./error";

interface FetchOptions extends RequestInit {
    timeout?: number;
}

function isError(error: unknown): error is Error{
    return error instanceof Error;
}

export async function fetchHandler<T>(url:string, options: FetchOptions = {}) : Promise<ActionResponse<T>> {
    const {
        timeout = 5000,
        headers: customHeaders = {},
        ...restOptions
    } = options

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout)

    const defaultHeaders: HeadersInit = {
        "Content-Type": "application/json",
        Accept: "application/json"
    }

    const headers: HeadersInit = {
        ...defaultHeaders,...customHeaders
    }

    const config: RequestInit = {
        ...restOptions,
        headers,
        signal: controller.signal
    }

    try {
        const response = await fetch(url,config)
        clearTimeout(id);

        if(!response.ok) {
            throw new RequestError(response.status, `HTTP error: ${response.status}`)
        }

        return await response.json()

    } catch (error) {
        const err = isError(error) ? error: new Error("Unknown Error");
        if(err.name === "AbortError") {
            logger.warn(`Request to ${url} time out`)
        } else {
            logger.error(`Error fetching ${url}: ${err.message}`)
        }

        return handleError(err) as ActionResponse<T>
    }
}
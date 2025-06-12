
const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    PROFILE: (id : string) => `/profile/${id}`,
    TAG: (id: string) => `/tags/${id}`,
    ASK_QUESTION: "/ask-question",
    COLLECTION: "/collection",
    COMMUNITY: "/community",
    TAGS: "/tags",
    QUESTION: (id: string) => `/questions/${id}`,
    SIGN_IN_WITH_OAUTH: "oauth"
}

export default ROUTES;
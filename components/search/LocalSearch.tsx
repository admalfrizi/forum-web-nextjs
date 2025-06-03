"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { usePathname, useSearchParams,useRouter } from 'next/navigation';
import { formUrlQuery, removeKeysFromUrlQuery } from '@/lib/url';

interface Props {
    route: string,
    imgSrc: string,
    placeHolder: string,
    otherClasses?: string
}

const LocalSearch = ({route, imgSrc, placeHolder, otherClasses}: Props) => {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const query = searchParams.get("query") || "";
    const [searchQuery, setSearchQuery] = useState(query)

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if(searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "query",
                    value: searchQuery,
                });

                router.push(newUrl,{
                    scroll: false
                })
            } else {
                if(pathname === route) {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["query"]
                    })

                    router.push(newUrl, {scroll: false})
                }
            }
        },300)

        return () => clearTimeout(delayDebounce)
    },[searchQuery,router, route, searchParams, pathname])

    return (
        <div className={`background-light900_dark300 flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
            <Image
                src={imgSrc}
                alt='search'
                width={24}
                height={24}
                className='cursor-pointer'
            />
            <Input 
                type='text'
                placeholder={placeHolder} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none'
            />
        </div>
    );
};

export default LocalSearch;
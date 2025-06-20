"use client"
import { SheetClose } from '@/components/ui/sheet';
import { sideBarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({isMobileNav = false, userId} : {isMobileNav ?: boolean, userId?: string}) => {

    const pathName = usePathname();

    return (
        <>
            {sideBarLinks.map((item) => {
                const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route;

                if(item.route === "/profile"){
                    if(userId) item.route = `${item.route}/${userId}`;
                    else return null;
                }

                const LinkComponent = (
                    <Link 
                        href={item.route} 
                        key={item.label} 
                        className={cn(isActive 
                            ? "primary-gradient rounded-lg text-light-900"
                            : "text-dark300_light900",
                            "flex items-center justify-start gap-4 bg-transparent p-4"
                        )}
                    >
                        <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({"invert-colors" : !isActive})}/>
                        <p className={cn(isActive ? "base-bold" : "base-medium", !isMobileNav && "max-lg:hidden")}>{item.label}</p>
                    </Link>
                )

                return isMobileNav ? (
                    <SheetClose asChild key={item.route}>
                        {LinkComponent}
                    </SheetClose>
                ) : (
                    <React.Fragment key={item.route}>
                        {LinkComponent}
                    </React.Fragment>
                )
            })}
        </>
    );
};

export default NavLinks;
"use client"

import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Theme = () => {
    const {setTheme} = useTheme();
    const [mount, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mount){
        return null
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size="icon">
                    <SunIcon className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
                    <MoonIcon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'/>
                    <span className='sr-only'>Toggle Theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='background-light900_dark200'>
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Theme
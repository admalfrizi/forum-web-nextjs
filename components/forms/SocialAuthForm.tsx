"use client"
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import ROUTES from '@/constants/routes';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer";
    
    const handleSignIn = async (provider: "github") => {
        try {
            await signIn(provider,{
                redirectTo: ROUTES.HOME
            });
        } catch(error){
            console.log(error);
            toast.error("Sign-in Failed",{
                description: 
                    error instanceof Error
                    ? error.message
                    : "An error occured during sign-in",
            });
        }
    };

    return (
        <div className='mt-10 flex flex-wrap gap-2.5'>
            <Button className={buttonClass} onClick={() => handleSignIn("github")}>
                <Image 
                    src="/icons/github.svg" 
                    alt='github' width={20} height={20} 
                    className='invert-colors mr-2.5 object-contain'
                />
                <span>Log in with Github</span>
            </Button>
            <Button className={buttonClass}>
                <Image 
                    src="/icons/google.svg" 
                    alt='google' width={20} height={20} 
                    className='mr-2.5 object-contain'
                />
                <span>Log in with Google</span>
            </Button>
        </div>
    );
};

export default SocialAuthForm;
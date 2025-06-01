"use client"
import AuthForm from '@/components/forms/AuthForm';
import { SignInSchema, SignUpSchema } from '@/lib/validations';
import React from 'react';

const SignUp = () => {
    return (
       <AuthForm 
            schema={SignUpSchema} 
            defaultValues={{
                username: "",name: "",email : "", password: ""
            }} 
            onSubmit={(data) => Promise.resolve({
                    success: true,
                    data
                })
            } 
            formType='SIGN_UP'
        />
    )
}

export default SignUp
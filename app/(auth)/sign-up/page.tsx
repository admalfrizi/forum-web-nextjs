"use client"
import AuthForm from '@/components/forms/AuthForm';
import { signUpWithCredentials } from '@/lib/actions/auth.action';
import { SignInSchema, SignUpSchema } from '@/lib/validations';
import React from 'react';

const SignUp = () => {
    return (
       <AuthForm 
            schema={SignUpSchema} 
            defaultValues={{
                username: "",name: "",email : "", password: ""
            }} 
            onSubmit={signUpWithCredentials} 
            formType='SIGN_UP'
        />
    )
}

export default SignUp
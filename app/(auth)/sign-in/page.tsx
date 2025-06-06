"use client"
import AuthForm from '@/components/forms/AuthForm';
import { signInWithCredentials } from '@/lib/actions/auth.action';
import { SignInSchema } from '@/lib/validations';
import React from 'react';

const SignIn = () => {
    return (
        <AuthForm 
            schema={SignInSchema} 
            defaultValues={{
                email : "", password: ""
            }} 
            onSubmit={signInWithCredentials} 
            formType='SIGN_IN'
        />
    )
}

export default SignIn
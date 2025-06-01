"use client"
import AuthForm from '@/components/forms/AuthForm';
import { SignInSchema } from '@/lib/validations';
import React from 'react';
import { FieldValues } from 'react-hook-form';

const SignIn = () => {
    return (
        <AuthForm 
            schema={SignInSchema} 
            defaultValues={{
                email : "", password: ""
            }} 
            onSubmit={(data) => Promise.resolve({
                    success: true,
                    data
                })
            } 
            formType='SIGN_IN'
        />
    )
}

export default SignIn
import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';
import React from 'react';

const page = async () => {

  const session = await auth();
  console.log(session)
  
  return (
    <div>
      <h1 className='h1-bold'>Welcome to our home page</h1>
      <h1 className='h1-bold'>Welcome to our home page</h1>
      <h1 className='h1-bold'>Welcome to our home page</h1> 

      <form action={async () => {
        "use server"
        await signOut({
          redirectTo: ROUTES.SIGN_IN
        })
      }} className='px-10 pt-[10px]'>
        <Button variant="outline" className='cursor-pointer' type='submit'>
          Logout
        </Button>
      </form>
    </div>
  );
};

export default page;
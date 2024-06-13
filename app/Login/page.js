"use client";
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image"



function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("session:", session);
    if (session?.user) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="grid md:grid-cols-2 min-h-screen w-full">
      <div className="relative overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/images/3121459-hd_1280_720_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-12 md:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-center">
          <div className="flex justify-center">
            <Image
              src="/images/OKTANO_LOGO.png"
              alt="Brand Logo"
              width={150} // You can adjust this value to change the size
              height={150} // You can adjust this value to change the size
              className="h-35 w-35"
            />
          </div>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Welcome back</h1>
            <p className="text-gray-600 dark:text-gray-400">Enter your credentials to access your account.</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email address</label>
              <input className="flex h-10 w-full rounded-md border border-input bg-background dark:bg-gray-800 px-3 py-2 text-sm text-black dark:text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="name@example.com" required type="email" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
                <a href="#" className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50">Forgot password?</a>
              </div>
              <input className="flex h-10 w-full rounded-md border border-input bg-background dark:bg-gray-800 px-3 py-2 text-sm text-black dark:text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" required type="password" />
            </div>
            <button
  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white dark:bg-blue-700 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-800 h-10 px-4 py-2 w-full"
  type="submit"
>
  Login
</button>
<button
  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white h-10 px-4 py-2 w-full"
  type="button"
  onClick={() => signIn()}
>
  <ChromeIcon className="mr-2 h-5 w-5" />
  Login with Google
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" x2="12" y1="8" y2="8"></line>
      <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
      <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
    </svg>
  );
}

export default Login;

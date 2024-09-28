'use client'
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
import Link from "next/link"; // Use Next.js Link component
import { Link as LucideLink } from "lucide-react"; // If you need an icon from lucide-react

function Header(){
    // Component when working with Clerk for user authentication.
    // Breaks the object from useUser() into 2 parts -> user, isSignedIn
    // user -> Contains the id, name, email
    // isSignedIn -> Boolean (checks whether user is signed or not)   
    const {user, isSignedIn} = useUser(); 

    return(
        <div className="p-5 flex justify-between items-center border shadow-sm">
            <div className="flex flex-row items-center">
                {/* Logo */}
                <Image src={"/logo.jpg"} alt="logo" width={60} height={10}></Image>
                <span className="text-gray-600 font-mono font-bold text-2xl">ExpenseIQ</span>
            </div>
            {/* Checking if user is signined in or not*/}
            {/* If yes -> display the userButton */}
            {/* if no -> Display buttons (Dashboard), (Get Started) */}
            {isSignedIn ? (
                <UserButton/>
            ) : (
                <div className="flex gap-3 items-center">

                {/* Link to connect to Dashboard page */}
                <Link href="dashboard">
                    <Button variant="outline" className="rounded-full font-bold hover:bg-gray-100">Dashboard</Button>
                </Link>
                {/* Link to connect to Get Started page */}
                <Link href="get-started">
                    <Button className="rounded-md font-bold text-[#d5e6b4] bg-[#2d2d2d] hover:bg-[#1c1b1b]">Get Started</Button>
                </Link>

            </div> )}
        </div>
    )
}

export default Header;
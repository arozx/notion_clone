'use client'
import React from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { Separator } from '@radix-ui/react-separator'
import CreateNoteDialog from '@/components/CreateNoteDialog'

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
        <div className='grainy min-h-screen'>
            <div className='max-w-7xl mx-auto p-10'>
                <div className='h-14'></div>
                <div className='flex justify-between items-center md:flex-row flex-col text-white'>
                    <div className='flex items-center'>
                        <Link href="/">
                            <Button className='bg-green-600'>
                                <ArrowLeft>Back</ArrowLeft>
                                Back
                            </Button>
                        </Link>
                        <div className='w-4'></div>
                        <h1 className='text-3xl font-bold text-gray-900'>My Notes</h1>
                        <div className='w-4'></div>
                        <UserButton />
                    </div>
                </div>


                <div className='text-center'>
                    <div className='text-xl text-grey-500'>You have no notes yet.</div>
                    {/* Display all the notes */}
                    <div className='flex justify-center'>
                        <div className='grid am:grid-cols-3 md:grid-cols-5 grid-cols-1 w-full'>
                            <CreateNoteDialog />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashboardPage
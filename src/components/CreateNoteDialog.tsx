'use client'
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import React from 'react'
import { DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'

type Props = {}

const CreateNoteDialog = (props: Props) => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl translaer-y-1 flex-row p-4'>
                <Plus className='w-6 h-6 text-green-600' strokeWidth={3} />  
                <h2 className='font-semibold text-green-800 sm:mt-2'>
                    New Note Book
                </h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Note Book</DialogTitle>
                <DialogDescription>
                    You can create a new note book here.
                </DialogDescription>
            </DialogHeader>
            <form>
                <Input />
                <div className='h-4'></div>
            </form>
        </DialogContent>
    </Dialog>
    )
}

export default CreateNoteDialog;
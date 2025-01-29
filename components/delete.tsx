'use client'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

export default function Delete({id}:{id:string}) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const router = useRouter()
    async function handleDelete(){
        const response = await fetch(`${baseUrl}/api/v1/users/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if(response.ok){
            router.refresh()
            toast.success("deleted successfully")
        }else{
            toast.error("failed to delete")
        }
    }
  return (
    <button onClick={()=> handleDelete()} className='text-red-600/90 shadow-lg p-2 rounded-full border-none'>
      <Trash/>
    </button>
  )
}

import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CreateButton() {
  return (
    <Link href='/register'>
        <button className=' text-black/70 mb-2 rounded-md shadow-md'>
      <Plus size={80}/>
    </button>
    </Link>
  )
}

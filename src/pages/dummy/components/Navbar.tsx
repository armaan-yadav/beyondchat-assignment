import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center px-6 md:px-12 z-50">
    <h1 className="text-2xl font-semibold">BrandName</h1>
    <ul className="hidden md:flex space-x-6 text-gray-700">
      <li className="cursor-pointer hover:text-gray-900">Home</li>
      <li className="cursor-pointer hover:text-gray-900">About</li>
      <li className="cursor-pointer hover:text-gray-900">Services</li>
      <li className="cursor-pointer hover:text-gray-900">Contact</li>
    </ul>
    <Button className="md:hidden">Menu</Button>
  </nav>
  )
}

export default Navbar
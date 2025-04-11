'use client'

import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='flex flex-col items-center h-screen text-white '>
      <h1 className='text-center text-4xl mb-6 font-bold'>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className='p-6 rounded-lg shadow-md w-full max-w-md border border-fameBlue'
      >
        <div className='mb-4'>
          <label htmlFor='name' className='block font-medium mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fameBlue'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fameBlue'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block font-medium mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fameBlue'
            placeholder='Enter your message'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-gradient-to-r from-fameRed via-[#f05d8c] to-fameBlue text-white py-2 px-4 rounded-lg transition duration-200 cursor-pointer transform hover:-translate-y-1'
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default ContactPage

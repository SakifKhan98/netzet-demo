'use client'

import React, { useState } from 'react'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='flex flex-col mt-12 items-center h-screen text-white '>
      <h1 className='text-center text-4xl mb-6 font-bold'>Join Us</h1>
      <form
        onSubmit={handleSubmit}
        className='bg-gradient-to-tr from-fameRed via-[#f05d8c] to-fameBlue p-6 rounded-lg shadow-md w-full max-w-md'
      >
        {/* <h2 className='text-2xl font-bold mb-4'>Join Us</h2> */}
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
          <label htmlFor='password' className='block  font-medium mb-2'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fameBlue'
            placeholder='Enter your password'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-gradient-to-l from-fameRed via-[#f05d8c] to-fameBlue transition duration-300 hover:bg-gradient-to-br shadow-md shadow-fameBlue hover:shadow-fameRed text-white py-2 px-4 rounded-lg  cursor-pointer transform hover:-translate-y-1 font-bold'
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignupPage

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">QuickGPT</h1>
        <p className="text-xl text-purple-100 mb-8">Your AI Chat Assistant</p>
        <button 
          onClick={() => navigate('https://quick-gpt-server-pink.vercel.app')}
          className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition"
        >
          Open App
        </button>
      </div>
    </div>
  )
}

export default Landing
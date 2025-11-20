import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Plans from './components/Plans'
import MenuPreview from './components/MenuPreview'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Plans />
      <MenuPreview />
      <Contact />
      <footer className="py-10 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Tiffin Express. All rights reserved.</p>
          <div className="text-sm opacity-90">Healthy meals, delivered daily.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

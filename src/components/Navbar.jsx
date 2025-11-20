import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500 text-white font-bold shadow-sm">T</span>
          <span className="font-semibold text-slate-800">Tiffin Express</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#plans" className="hover:text-slate-900">Plans</a>
          <a href="#menu" className="hover:text-slate-900">Today’s Menu</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 shadow-sm">Get Started</a>
      </div>
    </header>
  )
}

export default Navbar

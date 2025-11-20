import React, { useEffect, useState } from 'react'

function MenuPreview() {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/menu`)
        if (!res.ok) throw new Error('Failed to load menu')
        const data = await res.json()
        setMenu(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
  }, [])

  return (
    <section id="menu" className="py-16 bg-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Today’s Menu</h2>
          <p className="mt-2 text-slate-600">A glimpse of what we’re serving</p>
        </div>

        {loading ? (
          <div className="text-center text-slate-600">Loading menu...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {menu.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-emerald-100 p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <span className="text-emerald-700 font-semibold">${item.price.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-slate-600">{item.description}</p>
                <span className={`mt-3 inline-flex px-2 py-1 text-xs rounded-full ${item.veg ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>{item.veg ? 'Vegetarian' : 'Non-veg'}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default MenuPreview

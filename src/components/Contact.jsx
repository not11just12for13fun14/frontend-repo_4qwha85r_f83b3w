import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', plan: 'Monthly', people_count: 1, veg_only: true, delivery_time: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, people_count: Number(form.people_count) })
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      setStatus({ loading: false, success: 'Thanks! We will contact you shortly.', error: null })
      setForm({ name: '', phone: '', email: '', address: '', plan: 'Monthly', people_count: 1, veg_only: true, delivery_time: '', message: '' })
    } catch (e) {
      setStatus({ loading: false, success: null, error: e.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get a Callback</h2>
            <p className="mt-3 text-slate-600">Tell us a few details and we’ll reach out to share plans, pricing and start your subscription.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>Mon–Sat, 9 AM – 7 PM</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>Free trial lunch available</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>WhatsApp support</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Address</label>
                <input name="address" value={form.address} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Plan</label>
                <select name="plan" value={form.plan} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Custom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">People</label>
                <input type="number" name="people_count" min="1" max="20" value={form.people_count} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Preferred Delivery Time</label>
                <input name="delivery_time" value={form.delivery_time} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" name="veg_only" checked={form.veg_only} onChange={handleChange} className="rounded text-emerald-600 focus:ring-emerald-500" />
                  Vegetarian only
                </label>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="3" className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
            </div>

            <button disabled={status.loading} className="mt-4 inline-flex items-center rounded-md bg-emerald-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-emerald-700 disabled:opacity-60">
              {status.loading ? 'Submitting...' : 'Request Callback'}
            </button>

            {status.success && <p className="mt-3 text-emerald-700">{status.success}</p>}
            {status.error && <p className="mt-3 text-red-600">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'

const plans = [
  { name: 'Weekly', price: 29.99, features: ['5 days', '1 sabzi + dal', '4 chapati + rice', 'Salad/Raita', 'Free delivery'] },
  { name: 'Monthly', price: 109.99, highlight: true, features: ['22 days', '2 sabzi + dal', '5 chapati + rice', 'Salad/Raita', 'Priority delivery'] },
  { name: 'Custom', price: 0, features: ['Flexible days', 'Veg/Non-veg options', 'Special requirements', 'Corporate plans', 'Diet plans'] },
]

function Plans() {
  return (
    <section id="plans" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
          <p className="mt-2 text-slate-600">Choose a plan that fits your schedule and appetite</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border ${plan.highlight ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'} p-6 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <div className="text-emerald-700 font-bold text-2xl">{plan.price ? `$${plan.price}` : 'Contact'}</div>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow ${plan.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50'}`}>
                {plan.name === 'Custom' ? 'Talk to us' : 'Choose plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans

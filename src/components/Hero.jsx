import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Healthy, Home-style Tiffins
              <span className="block text-emerald-600">Delivered Daily</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Freshly cooked meals made with love. Flexible plans, vegetarian options, and on-time delivery for busy professionals and students.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#plans" className="inline-flex items-center rounded-md bg-emerald-600 text-white px-5 py-3 text-sm font-medium hover:bg-emerald-700 shadow">
                View Plans
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-white text-emerald-700 ring-1 ring-emerald-200 px-5 py-3 text-sm font-medium hover:bg-emerald-50">
                Get a Callback
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"/>Daily delivery</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"/>100% veg options</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"/>Hygienic & tasty</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/60 border border-emerald-100 shadow-sm grid grid-cols-2 p-4 gap-4">
              {['Chapati','Dal','Sabzi','Rice','Raita','Salad'].map((item,i) => (
                <div key={i} className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 flex items-center justify-center text-emerald-700 font-medium">
                  {item}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2 shadow ring-1 ring-slate-200 text-sm">Free delivery on monthly plans</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

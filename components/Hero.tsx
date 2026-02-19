import Image from "next/image";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/slep%20(3).jpg"
          alt="Šlep služba MB — vuča vozila"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/55 to-slate-900/05" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/40 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse-slow" />
            Dostupni 24 sata, 7 dana u nedelji
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Šlep Služba
            <span className="block text-amber-400">& Kombi Prevoz</span>
            <span className="block text-3xl sm:text-4xl font-bold text-slate-400 mt-1">MB</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            Brza i pouzdana pomoć na putu. Vučemo sva vozila, prevozimo nameštaj i robu —{" "}
            <strong className="text-amber-400">odmah reagujemo</strong> na vaš poziv.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-amber-500/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Pozovi {PHONE_DISPLAY}
            </a>
            <a
              href="#usluge"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-400 font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Naše usluge
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { value: "24/7", label: "Dostupnost" },
              { value: "Brzo", label: "Reagovanje" },
              { value: "Sve", label: "Vrste vozila" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-amber-400">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500">
        <span className="text-xs font-medium tracking-widest uppercase">Skroluj</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

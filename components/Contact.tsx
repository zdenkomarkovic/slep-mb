import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/constants";

const CONTACT_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Telefon",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    description: "Dostupni 24/7 — uvek odgovaramo",
    external: false,
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "E-mail",
    value: EMAIL,
    href: EMAIL_HREF,
    description: "Pošaljite nam poruku",
    external: false,
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
    description: "Pratite nas za aktuelnosti",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Stupite u kontakt
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">
            Kontakt
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Zovite nas odmah — tu smo 24 sata dnevno, 7 dana u nedelji.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Contact cards */}
          <div className="space-y-3 sm:space-y-4">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-2xl p-4 sm:p-6 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base break-all leading-snug group-hover:text-amber-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    {item.description}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-slate-600 group-hover:text-amber-500 flex-shrink-0 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* CTA panel */}
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-6 sm:p-10">
            <div className="w-13 h-13 sm:w-16 sm:h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 w-14 h-14">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-white mb-2 sm:mb-3">
              Trebate hitnu pomoć?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Ne čekajte — jedan poziv je dovoljno. Stižemo brzo i rešavamo
              problem profesionalno.
            </p>

            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base sm:text-xl py-4 sm:py-5 px-6 sm:px-8 rounded-xl transition-all hover:scale-105 shadow-xl shadow-amber-500/25 mb-4"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Pozovite {PHONE_DISPLAY}
            </a>

            <div className="flex items-center gap-2 text-slate-500 text-sm justify-center">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              Dostupni sada — 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

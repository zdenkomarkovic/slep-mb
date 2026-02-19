const SERVICES = [
  {
    title: "Šlep Služba",
    description:
      "Profesionalna vuča i transport vozila — putničkih automobila, kombija i motocikala. Dolazimo brzo bez obzira na vreme i situaciju.",
    features: [
      "Putnička vozila svih vrsta",
      "Kombi i dostavna vozila",
      "Motocikli i skuteri",
      "Vozila posle saobraćajnih udesa",
      "Vozila u kvaru — pukla guma, mrtva baterija",
      "Noćni pozivi — uvek odgovaramo",
    ],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
  {
    title: "Kombi Prevoz",
    description:
      "Brz i siguran prevoz robe, nameštaja i bele tehnike. Idealno za selidbe, dostave i transport krupnih predmeta.",
    features: [
      "Selidbe stanova i kuća",
      "Prevoz nameštaja",
      "Prevoz bele tehnike i elektronike",
      "Dostava robe za firme",
      "Prevoz građevinskog materijala",
      "Express dostava — isti dan",
    ],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-2 1h2.5l1.28 1.5H18V9zm-3.5 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-9 0c-.83 0-1.5-.67-1.5-1.5S4.67 16 5.5 16s1.5.67 1.5 1.5S6.33 19 5.5 19zM3 13V6h12v7H3z" />
      </svg>
    ),
  },
];

const WHY_US = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
    title: "Dostupni 24/7",
    desc: "Zovite u bilo koje doba dana ili noći — uvek smo tu.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: "Brza reakcija",
    desc: "Stižemo u najkraćem mogućem roku na vašu lokaciju.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
    title: "Povoljne cene",
    desc: "Transparentne cene bez skrivenih troškova.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    title: "Pouzdanost",
    desc: "Iskustvo i profesionalizam koji možete da se oslonite.",
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Šta nudimo
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Naše Usluge
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Specijalizovani smo za šlep službu i kombi prevoz — sve na jednom
            mestu.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500/20 transition-colors">
                {service.icon}
              </div>

              {/* Title & description */}
              <h3 className="text-2xl font-black text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-amber-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why us section */}
        <div className="border-t border-slate-800 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Zašto baš mi?
            </h2>
            <p className="text-slate-400">
              Razlozi zbog kojih nam klijenti uvek ponovo zovu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-amber-500/30 transition-colors"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TOWING_SERVICES = [
  {
    title: "Putnička vozila",
    description:
      "Vučemo sve vrste putničkih automobila — sedan, hečbek, karavan, SUV. Bezbedno i brzo, bez oštećenja vozila.",
    details: "Koristimo modernu opremu koja ne oštećuje karoseriju ni točkove. Transportujemo vozilo do servisa, kuće ili bilo koje lokacije po vašem izboru.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
        <circle cx="7.5" cy="14.5" r="1.5" />
        <circle cx="16.5" cy="14.5" r="1.5" />
      </svg>
    ),
    tag: "Najčešće",
  },
  {
    title: "Kombi i dostavna vozila",
    description:
      "Specijalizovana vuča kombi i lakih dostavnih vozila. Savršeno za firme čija vozila ostanu na putu.",
    details: "Rukujemo svim tipovima kombija — zatvoreni, otvoreni, hladnjača. Posebna pažnja pri utovaru kako bi vozilo stiglo neoštećeno.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-2 1h2.5l1.28 1.5H18V9zm-3.5 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-9 0c-.83 0-1.5-.67-1.5-1.5S4.67 16 5.5 16s1.5.67 1.5 1.5S6.33 19 5.5 19zM3 13V6h12v7H3z" />
      </svg>
    ),
    tag: null,
  },
  {
    title: "Manji kamioni",
    description:
      "Vučemo lake i srednje kamione do 7.5 tona. Ako vas je ostavio kamion, mi smo tu da ga odšlepamo do servisa.",
    details: "Opremljeni smo za vuču manjih teretnih kamiona, mini dampera i lakih teretnjaka. Brza reakcija i siguran transport do vaše destinacije.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    tag: "Novo",
  },
  {
    title: "Motocikli i skuteri",
    description:
      "Pažljiv transport motocikala, skutera i četvorotočkaša. Posebna oprema za sigurno pričvršćivanje.",
    details: "Motocikli zahtevaju posebnu pažnju pri transportu. Koristimo specijalne stezaljke i podloge kako bi vaš motor stigao bez ogrebotina.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 8.586L16.414 6H13v2h2.586L17 9.414V11h-4.638l-1.33-2.217A2 2 0 009.33 8H7a4 4 0 000 8h.341A4.001 4.001 0 0015 15h.465A4.001 4.001 0 0022 14v-2.586L19 8.586zM7 14a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    ),
    tag: null,
  },
  {
    title: "Vozila posle udesa",
    description:
      "Hitno zbrinjavanje vozila sa mesta saobraćajne nesreće. Diskretno, brzo i u koordinaciji sa policijom.",
    details: "Iskustvo u radu na mestima nesreća — sarađujemo sa policijom i osiguravajućim kućama. Vozilo zbrinjavamo odmah i prevozimo na sigurno mesto.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    tag: "Hitno",
  },
  {
    title: "Vozila u kvaru",
    description:
      "Mrtva baterija, pukla guma, nedostatak goriva ili kvar motora — dolazimo i rešavamo problem.",
    details: "Pružamo pomoć na licu mesta kada je to moguće. Ako nije, vozilo bezbedno odvlačimo do najbližeg ili željenog servisa.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
    tag: null,
  },
  {
    title: "Noćna vuča",
    description:
      "Ostali ste bez vozila usred noći? Zovite nas — dostupni smo 24 časa, uključujući vikende i praznike.",
    details: "Nema razloga da čekate do jutra. Naš tim je uvek na raspolaganju — reagujemo na nočne pozive jednako brzo kao i dnevne.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
      </svg>
    ),
    tag: "24/7",
  },
  {
    title: "Međugradski transport",
    description:
      "Vuča vozila na duge relacije — između gradova, širom Srbije. Organizujemo prevoz do željene destinacije.",
    details: "Bez obzira gde ste ostali — organizujemo transport vozila na bilo koju adresu u Srbiji. Cena se dogovara prema relaciji.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    tag: null,
  },
];

const TAG_STYLES: Record<string, string> = {
  Najčešće: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Novo: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Hitno: "bg-red-500/15 text-red-400 border-red-500/30",
  "24/7": "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export default function TowingServices() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Šta vučemo
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Usluge Šlep Službe
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Od putničkih automobila do manjih kamiona — vučemo svako vozilo,
            u svakom trenutku.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOWING_SERVICES.map((service) => (
            <div
              key={service.title}
              className="relative bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-slate-800 transition-all duration-300 group flex flex-col"
            >
              {/* Tag */}
              {service.tag && (
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full border ${TAG_STYLES[service.tag]}`}
                >
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 mb-5 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white mb-2">
                {service.title}
              </h3>

              {/* Short description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Divider */}
              <div className="border-t border-slate-700/60 pt-4 mt-auto">
                <p className="text-slate-500 text-xs leading-relaxed">
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Ne vidite vaše vozilo na listi?
            </p>
            <p className="text-slate-400 text-sm">
              Pozovite nas — verovatno možemo da pomognemo.
            </p>
          </div>
          <a
            href="tel:+381677189138"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovite 067 718 9138
          </a>
        </div>
      </div>
    </section>
  );
}

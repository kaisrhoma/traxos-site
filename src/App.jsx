import logo from "./assets/logo.png";
import bg from "./assets/bg.jpg";

export default function TraxosCompanyWebsite() {
  const services = [
    {
      title: "الحجز والشحن من المواقع العالمية",
      description: "نقوم بالحجز والشحن من معظم المواقع العالمية بسهولة وموثوقية.",
    },
    {
      title: "الإمارات",
      description: "الشحن الجوي: 5$",
    },
    {
      title: "السعودية",
      description: "جوي: 9$ | بحري: 190$ CBM",
    },
    {
      title: "الصين",
      description: "جوي: 9.5$ | بحري: 190$ CBM",
    },
    {
      title: "أمريكا / تركيا / إيطاليا",
      description: "الشحن الجوي متوفر لهذه الوجهات.",
    },
    {
      title: "الشحن البحري الأوروبي",
      description: "15 - 25 يورو",
    },
  ];

  const advantages = [
    "سرعة في تنفيذ الطلبات ومتابعتها",
    "خدمة موثوقة واهتمام بتفاصيل العميل",
    "أسعار مناسبة وخيارات شحن متعددة",
    "دعم مستمر عبر قنوات التواصل الاجتماعي",
  ];

  const countries = ["الإمارات", "السعودية", "الصين", "أمريكا", "تركيا", "إيطاليا"];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-900">
      <header
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(11,31,58,0.78), rgba(15,42,77,0.82)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Traxos" className="h-35 sm:h-50 md:h-60 w-auto drop-shadow-lg" />
              <span className="text-xl font-black tracking-wide sm:text-2xl">TRAXOS</span>
            </div>

            <div className="hidden gap-6 text-sm md:flex">
              <a href="#about" className="transition hover:text-orange-300">من نحن</a>
              <a href="#services" className="transition hover:text-orange-300">الخدمات</a>
              <a href="#advantages" className="transition hover:text-orange-300">لماذا نحن</a>
              <a href="#contact" className="transition hover:text-orange-300">تواصل معنا</a>
            </div>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
                خدمات شحن وتسوق من المتاجر العالمية إلى ليبيا
              </div>

              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-white !text-white">
  تراكسوس
  <span className="mt-2 block text-orange-300">
    بوابتك للتسوق والشحن من العالم إلى ليبيا
  </span>
</h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                نقدم حلولًا عملية وموثوقة للحجز والشحن من أشهر المواقع العالمية، مع متابعة واضحة للشحنات حتى تصل بأمان وبأفضل تكلفة ممكنة.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-orange-600"
                >
                  تواصل معنا الآن
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  اكتشف خدماتنا
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl">
                <div className="text-sm text-slate-300">خبرة في</div>
                <div className="mt-2 text-3xl font-black">الشحن الدولي</div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  متابعة وتنظيم للشحنات القادمة من عدة دول ومتاجر عالمية بطريقة احترافية.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
                <div className="text-sm text-slate-500">خدمة مميزة</div>
                <div className="mt-2 text-3xl font-black text-[#0f2a4d]">دعم للعملاء</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  تواصل سريع وواضح لمساعدة العميل في كل خطوة من خطوات الحجز والشحن.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:col-span-2">
                <div className="text-sm text-slate-500">وجهات رئيسية</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-[#0f2a4d]"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold text-orange-500">من نحن</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl text-[#0f2a4d]">
                شركة تراكسوس لخدمات الشحن والتسوق
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                تراكسوس شركة متخصصة في الحجز والشحن من أغلب المواقع العالمية، وتهدف إلى تسهيل تجربة التسوق من الخارج وتقديم حلول شحن موثوقة وسريعة لعملائها داخل ليبيا.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-3xl font-black text-[#0f2a4d]">+100%</div>
                  <div className="mt-2 text-slate-600">اهتمام بتجربة العميل</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#0f2a4d]">مرونة</div>
                  <div className="mt-2 text-slate-600">في خيارات الشحن والدفع</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#0f2a4d]">وضوح</div>
                  <div className="mt-2 text-slate-600">في الإجراءات والمتابعة</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#0f2a4d]">موثوقية</div>
                  <div className="mt-2 text-slate-600">في التعامل مع الطلبات</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-bold text-orange-500 ">الخدمات</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl text-[#0f2a4d] ">ماذا نقدم لعملائنا؟</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-400 hover:shadow-xl"
                >
                  <h3 className="text-2xl font-black text-[#0f2a4d]">{service.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div>
              <p className="text-sm font-bold text-orange-500">لماذا تراكسوس؟</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl text-[#0f2a4d]">
                مزايا تجعلنا الخيار المناسب
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
                نعمل على تقديم تجربة واضحة ومريحة للعميل، مع اهتمام بالتفاصيل منذ لحظة الطلب وحتى استلام الشحنة.
              </p>
            </div>

            <div className="grid gap-4">
              {advantages.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f2a4d] text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <p className="text-base font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f2a4d] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-bold text-orange-300">رؤيتنا</p>
                  <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                    أن نصبح الخيار الأول للشحن والتسوق الدولي في ليبيا
                  </h2>
                </div>
                <div>
                  <p className="text-lg leading-8 text-slate-200">
                    نسعى لتطوير خدماتنا باستمرار، وتقديم تجربة حديثة وسلسة تعكس احترافية الشركة وتمنح العميل الثقة في كل طلبية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="text-sm font-bold text-orange-500">تواصل معنا</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl text-[#0f2a4d]">جاهز لتجربة خدمة احترافية؟</h2>
              <p className="mt-5 leading-8 text-slate-600">
                تواصل معنا عبر الهاتف أو البريد الإلكتروني أو صفحاتنا على مواقع التواصل الاجتماعي، وسنكون سعداء بخدمتك.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="text-sm text-slate-500">الهاتف</div>
                <a href="tel:+218920473935" className="mt-2 block text-lg font-bold text-[#0f2a4d]">
                  +218920473935
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="text-sm text-slate-500">البريد الإلكتروني</div>
                <a href="mailto:traxos.ly@gmail.com" className="mt-2 block text-lg font-bold text-[#0f2a4d]">
                  traxos.ly@gmail.com
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="text-sm text-slate-500 text-center">تابعنا على</div>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://www.facebook.com/share/18NubTpq5R/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/traxos_cargo?igsh=NTJzd3RreWtzaXk3"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 font-semibold text-white transition hover:opacity-90"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@traxos_ly?_r=1&_t=ZS-94xx14pDepG"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-black px-4 py-2 font-semibold text-white transition hover:bg-slate-800"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Traxos. جميع الحقوق محفوظة.</div>
          <div>
            تم تصميم الموقع بواسطة{" "}
            <a
              href="https://www.facebook.com/share/1AtcaAgw5c/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#1e3a8a] hover:text-orange-500"
            >
              Mellon Tech
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
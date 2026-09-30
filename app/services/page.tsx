export default function ServicesPage() {
  const services = [
    {
      icon: "👤",
      title: "Matrimonial Profiles",
      description:
        "Create and manage a detailed matrimonial profile with your personal, educational and professional information.",
    },
    {
      icon: "🔎",
      title: "Profile Search",
      description:
        "Search for suitable profiles using preferences such as age, location, education and profession.",
    },
    {
      icon: "❤️",
      title: "Interest & Connections",
      description:
        "Express interest in suitable profiles and manage your matrimonial connections.",
    },
    {
      icon: "🔒",
      title: "Privacy",
      description:
        "Profile information can be protected and access to sensitive details can be controlled.",
    },
    {
      icon: "💳",
      title: "Membership",
      description:
        "Unlock eligible full profile information with our ₹500 six-month membership.",
    },
    {
      icon: "🤝",
      title: "Bureau Support",
      description:
        "Get assistance from the marriage bureau throughout your matrimonial journey.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBF8F4]">

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
            Our Services
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#2A2420] sm:text-5xl">
            Everything You Need
          </h1>

          <p className="mt-5 leading-7 text-gray-600">
            A simple and organized way to manage your matrimonial journey.
          </p>

        </div>


        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FBF8F4] text-2xl">
                {service.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold text-[#2A2420]">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
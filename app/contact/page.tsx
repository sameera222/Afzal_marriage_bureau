export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F4]">

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#2A2420] sm:text-5xl">
            We Are Here to Help
          </h1>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-[#6B3F2A] p-8 text-white sm:p-10">

            <h2 className="text-2xl font-bold">
              Afzal Marriage Bureau
            </h2>

            <p className="mt-4 leading-7 text-[#EBDDD3]">
              Have a question about registration, profiles or membership?
              Get in touch with our bureau.
            </p>

            <div className="mt-8 space-y-5 text-sm">

              <p>📞 Phone: Contact Bureau</p>
              <p>✉️ Email: info@example.com</p>
              <p>📍 Location: Bureau Address</p>

            </div>

          </div>


          <form className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3F2A]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3F2A]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3F2A]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3F2A]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#6B3F2A] px-5 py-3.5 font-semibold text-white"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}
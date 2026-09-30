export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F4]">

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#2A2420] sm:text-5xl">
            About Afzal Marriage Bureau
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
            We aim to help individuals and families discover meaningful
            matrimonial connections through a trusted and privacy-conscious
            platform.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-[#6B3F2A]">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Afzal Marriage Bureau is designed to make the matrimonial
              search more organized, convenient and respectful of personal
              privacy.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-[#6B3F2A]">
              Our Approach
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We provide profile-based searching, privacy controls and
              membership features while keeping registration simple and
              accessible.
            </p>

          </div>

        </div>


        <div className="mt-8 rounded-3xl bg-[#6B3F2A] p-8 text-white sm:p-12">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Looking for a meaningful connection?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#EBDDD3]">
            Create your profile and begin your matrimonial journey with
            Afzal Marriage Bureau.
          </p>

          <a
            href="/register"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-[#6B3F2A]"
          >
            Register Free
          </a>

        </div>

      </section>

    </main>
  );
}
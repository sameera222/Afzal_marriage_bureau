import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[#FBF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
                Afzal Marriage Bureau
              </p>

              <h1 className="text-4xl font-bold leading-tight text-[#2A2420] sm:text-5xl lg:text-6xl">
                Find Your
                <span className="block text-[#6B3F2A]">Life Partner</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 md:mx-0">
                A trusted matrimonial platform designed to help you discover
                meaningful connections and take the first step towards building
                a beautiful future together.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <button
                  type="button"
                  className="rounded-full bg-[#6B3F2A] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#573222]"
                >
                  <Link href="/profiles">Find Your Match</Link>
                </button>

                <button
                  type="button"
                  className="rounded-full border border-[#6B3F2A] bg-white px-8 py-4 text-sm font-semibold text-[#6B3F2A] hover:bg-[#6B3F2A] hover:text-white"
                >
                  <Link href="/register">Register Free</Link>
                </button>
              </div>

              <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 divide-x divide-gray-200 md:mx-0">
                <div className="px-3 text-center">
                  <p className="text-2xl font-bold text-[#6B3F2A]">1000+</p>
                  <p className="mt-1 text-sm text-gray-500">Profiles</p>
                </div>

                <div className="px-3 text-center">
                  <p className="text-2xl font-bold text-[#6B3F2A]">500+</p>
                  <p className="mt-1 text-sm text-gray-500">Connections</p>
                </div>

                <div className="px-3 text-center">
                  <p className="text-2xl font-bold text-[#6B3F2A]">100+</p>
                  <p className="mt-1 text-sm text-gray-500">Stories</p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[32px] bg-[#E9DDD2] shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#B88A5A]/20" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-lg">
                    💍
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-[#6B3F2A]">
                    Your Story Starts Here
                  </h2>

                  <p className="mt-3 px-6 text-sm leading-6 text-gray-500">
                    Beautiful connections. Meaningful relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#2A2420] sm:text-4xl">
              A Better Way to Find Your Match
            </h2>

            <p className="mt-4 text-gray-600">
              We focus on trust, privacy and meaningful matrimonial connections.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="✓"
              title="Verified Profiles"
              text="Profiles can be reviewed and approved by our bureau."
            />

            <FeatureCard
              icon="🔒"
              title="Privacy First"
              text="Personal information is protected and shared carefully."
            />

            <FeatureCard
              icon="💍"
              title="Meaningful Matches"
              text="Search profiles based on your preferences."
            />

            <FeatureCard
              icon="🤝"
              title="Personal Support"
              text="Our bureau is here to assist you throughout your journey."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#FBF8F4] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#2A2420] sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Step
              number="01"
              title="Register Free"
              text="Create your account completely free."
            />

            <Step
              number="02"
              title="Create Profile"
              text="Tell us about yourself and your preferences."
            />

            <Step
              number="03"
              title="Find Matches"
              text="Browse profiles that match your preferences."
            />

            <Step
              number="04"
              title="Connect"
              text="Take the next step towards a meaningful relationship."
            />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#6B3F2A] p-8 text-center text-white shadow-xl sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C9A8]">
              Membership
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Unlock Full Profiles
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#EBDDD3]">
              Register for free and explore the platform. When you are ready,
              unlock eligible full profile details with our six-month
              membership.
            </p>

            <div className="my-8">
              <span className="text-5xl font-bold">₹500</span>
              <span className="ml-2 text-[#EBDDD3]">/ 6 months</span>
            </div>

            <div className="mx-auto grid max-w-2xl gap-3 text-left sm:grid-cols-2">
              <MembershipItem text="Full authorized profile details" />
              <MembershipItem text="Continue browsing and searching" />
              <MembershipItem text="Membership active for 6 months" />
              <MembershipItem text="Renewal after expiry" />
            </div>

            <button
              type="button"
              className="mt-9 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#6B3F2A] hover:bg-[#F3E9E1]"
            >
              View Membership
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FBF8F4] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2A2420] sm:text-4xl lg:text-5xl">
            Ready to Begin Your Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Create your matrimonial profile today. Registration is free.
          </p>

          <button
            type="button"
            className="mt-8 rounded-full bg-[#6B3F2A] px-8 py-4 text-sm font-semibold text-white shadow-md hover:bg-[#573222]"
          >
            <Link href="/register">Create Free Profile</Link>
          </button>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FBF8F4] text-xl text-[#6B3F2A]">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#2A2420]">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6B3F2A] text-sm font-bold text-white shadow-md">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#2A2420]">{title}</h3>

      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function MembershipItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 rounded-xl bg-white/10 p-3 text-sm text-[#F5EAE2]">
      <span>✓</span>
      <span>{text}</span>
    </div>
  );
}

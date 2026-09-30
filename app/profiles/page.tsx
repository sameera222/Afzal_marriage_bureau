const profiles = [
  {
    id: "AMB1001",
    name: "Profile AMB1001",
    age: 27,
    education: "MBA",
    profession: "Software Professional",
    location: "Maharashtra",
  },
  {
    id: "AMB1002",
    name: "Profile AMB1002",
    age: 29,
    education: "B.Com",
    profession: "Business",
    location: "Maharashtra",
  },
  {
    id: "AMB1003",
    name: "Profile AMB1003",
    age: 26,
    education: "M.Sc",
    profession: "Professional",
    location: "Maharashtra",
  },
  {
    id: "AMB1004",
    name: "Profile AMB1004",
    age: 30,
    education: "B.E.",
    profession: "Engineer",
    location: "Maharashtra",
  },
];

export default function ProfilesPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F4]">

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
            Matrimonial Profiles
          </p>

          <h1 className="mt-3 text-4xl font-bold text-[#2A2420]">
            Find Your Match
          </h1>

          <p className="mt-4 text-gray-600">
            Browse profiles and discover potential connections.
          </p>

        </div>


        {/* Filters */}

        <div className="mt-10 rounded-3xl bg-white p-5 shadow-sm">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <input
              type="number"
              placeholder="Minimum age"
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3F2A]"
            />

            <input
              type="number"
              placeholder="Maximum age"
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3F2A]"
            />

            <input
              type="text"
              placeholder="City / Location"
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3F2A]"
            />

            <button className="rounded-xl bg-[#6B3F2A] px-5 py-3 font-semibold text-white">
              Search Profiles
            </button>

          </div>

        </div>


        {/* Profiles */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >

              <div className="flex aspect-[4/3] items-center justify-center bg-[#E9DDD2] text-5xl">
                👤
              </div>

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <h2 className="font-bold text-[#2A2420]">
                    {profile.name}
                  </h2>

                  <span className="rounded-full bg-[#FBF8F4] px-2 py-1 text-xs text-[#6B3F2A]">
                    ✓
                  </span>

                </div>

                <p className="mt-3 text-sm text-gray-600">
                  {profile.age} years • {profile.education}
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  {profile.profession}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {profile.location}
                </p>


                <button className="mt-5 w-full rounded-full border border-[#6B3F2A] py-3 text-sm font-semibold text-[#6B3F2A]">
                  View Profile
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
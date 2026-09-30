export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F4]">

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A5A]">
          Membership
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#2A2420] sm:text-5xl">
          Unlock Full Profile Access
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Registration is free. Upgrade whenever you want to access eligible
          protected profile details.
        </p>


        <div className="mx-auto mt-12 max-w-md rounded-3xl bg-white p-8 shadow-xl">

          <p className="text-sm font-semibold text-[#B88A5A]">
            SIX MONTH MEMBERSHIP
          </p>

          <div className="mt-4">
            <span className="text-5xl font-bold text-[#6B3F2A]">
              ₹500
            </span>
          </div>

          <p className="mt-2 text-gray-500">
            Valid for 6 months
          </p>


          <div className="mt-8 space-y-3 text-left text-sm text-gray-600">

            <p>✓ Access eligible full profile details</p>
            <p>✓ Search matrimonial profiles</p>
            <p>✓ Manage your profile</p>
            <p>✓ Membership expiry shown in dashboard</p>

          </div>


          <button className="mt-8 w-full rounded-full bg-[#6B3F2A] px-6 py-4 font-semibold text-white">
            Continue to Payment
          </button>

        </div>

      </section>

    </main>
  );
}
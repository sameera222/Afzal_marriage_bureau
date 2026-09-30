import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#FBF8F4]">

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* PAGE HEADING */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88A5A] sm:text-sm">
            Join Afzal Marriage Bureau
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#2A2420] sm:text-4xl lg:text-5xl">
            Create Your Free Profile
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Registration is completely free. Tell us a little about yourself
            and start your matrimonial journey.
          </p>

        </div>


        {/* REGISTRATION CARD */}

        <div className="mx-auto mt-10 max-w-4xl rounded-[28px] bg-white p-5 shadow-xl sm:mt-12 sm:p-8 md:p-10 lg:rounded-[36px] lg:p-12">

          <form className="space-y-10">


            {/* ================= BASIC INFORMATION ================= */}

            <section>

              <div className="mb-6">

                <h2 className="text-xl font-bold text-[#2A2420] sm:text-2xl">
                  Basic Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Start with some basic details about yourself.
                </p>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                {/* First Name */}

                <FormField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  required
                />

                {/* Last Name */}

                <FormField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  required
                />

                {/* Gender */}

                <div>

                  <label
                    htmlFor="gender"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>

                  <select
                    id="gender"
                    name="gender"
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-[#6B3F2A] focus:ring-2 focus:ring-[#6B3F2A]/10"
                  >
                    <option value="" disabled>
                      Select gender
                    </option>

                    <option value="male">
                      Male
                    </option>

                    <option value="female">
                      Female
                    </option>

                  </select>

                </div>


                {/* Date of Birth */}

                <FormField
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  required
                />

              </div>

            </section>


            {/* DIVIDER */}

            <div className="h-px bg-gray-100" />


            {/* ================= CONTACT ================= */}

            <section>

              <div className="mb-6">

                <h2 className="text-xl font-bold text-[#2A2420] sm:text-2xl">
                  Contact Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  These details will be used to manage your account.
                </p>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

                <FormField
                  label="Mobile Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

              </div>

            </section>


            {/* DIVIDER */}

            <div className="h-px bg-gray-100" />


            {/* ================= LOCATION ================= */}

            <section>

              <div className="mb-6">

                <h2 className="text-xl font-bold text-[#2A2420] sm:text-2xl">
                  Location
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Tell us where you currently live.
                </p>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                <FormField
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Enter city"
                  required
                />

                <FormField
                  label="State"
                  name="state"
                  type="text"
                  placeholder="Enter state"
                  required
                />

              </div>

            </section>


            {/* DIVIDER */}

            <div className="h-px bg-gray-100" />


            {/* ================= ACCOUNT ================= */}

            <section>

              <div className="mb-6">

                <h2 className="text-xl font-bold text-[#2A2420] sm:text-2xl">
                  Create Your Account
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Choose a secure password for your account.
                </p>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                <FormField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  required
                />

                <FormField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />

              </div>

            </section>


            {/* ================= PRIVACY ================= */}

            <section className="rounded-2xl bg-[#FBF8F4] p-5 sm:p-6">

              <div className="flex items-start gap-3">

                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#6B3F2A]"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-6 text-gray-600"
                >
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="font-medium text-[#6B3F2A] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="font-medium text-[#6B3F2A] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  . I understand that registration is free and that access
                  to certain profile information may require a membership.
                </label>

              </div>

            </section>


            {/* ================= SUBMIT ================= */}

            <div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#6B3F2A] px-6 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#573222] active:scale-[0.99]"
              >
                Create Free Account
              </button>


              <p className="mt-5 text-center text-sm text-gray-500">

                Already have an account?{" "}

                <Link
                  href="/login"
                  className="font-semibold text-[#6B3F2A] hover:underline"
                >
                  Login
                </Link>

              </p>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   FORM FIELD COMPONENT
========================================================= */

function FormField({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#6B3F2A] focus:ring-2 focus:ring-[#6B3F2A]/10"
      />

    </div>
  );
}
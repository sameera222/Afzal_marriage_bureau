import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#FBF8F4]">

      <section className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-xl lg:grid-cols-2 lg:rounded-[36px]">

          {/* LEFT SIDE */}

          <div className="hidden bg-[#6B3F2A] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C9A8]">
                Welcome Back
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight xl:text-5xl">
                Your journey to finding the right partner continues.
              </h1>

              <p className="mt-6 max-w-md leading-7 text-[#EBDDD3]">
                Sign in to manage your profile, discover matrimonial profiles
                and continue your journey with Afzal Marriage Bureau.
              </p>

            </div>


            <div className="mt-12">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl">
                  💍
                </div>

                <div>
                  <p className="font-semibold">
                    Afzal Marriage Bureau
                  </p>

                  <p className="text-sm text-[#EBDDD3]">
                    Connecting Hearts, Building Families
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE - FORM */}

          <div className="p-6 sm:p-10 lg:p-12 xl:p-14">

            {/* Mobile Heading */}

            <div className="mb-8 text-center lg:text-left">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FBF8F4] text-2xl lg:hidden">
                💍
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88A5A] lg:mt-0 sm:text-sm">
                Member Login
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#2A2420] sm:text-4xl">
                Welcome Back
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Sign in to access your matrimonial account.
              </p>

            </div>


            {/* FORM */}

            <form className="space-y-5">

              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#6B3F2A] focus:ring-2 focus:ring-[#6B3F2A]/10"
                />

              </div>


              {/* Password */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    href="#"
                    className="text-xs font-medium text-[#6B3F2A] hover:underline sm:text-sm"
                  >
                    Forgot password?
                  </Link>

                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#6B3F2A] focus:ring-2 focus:ring-[#6B3F2A]/10"
                />

              </div>


              {/* Remember */}

              <div className="flex items-center gap-3">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-[#6B3F2A]"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>

              </div>


              {/* Login Button */}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#6B3F2A] px-5 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#573222] active:scale-[0.99]"
              >
                Login
              </button>

            </form>


            {/* Register */}

            <div className="mt-7 text-center">

              <p className="text-sm text-gray-500">
                
              {"Don't have an account?"}{" "}

                <Link
                  href="/register"
                  className="font-semibold text-[#6B3F2A] hover:underline"
                >
                  Register Free
                </Link>

              </p>

            </div>


            {/* Privacy */}

            <p className="mt-8 text-center text-xs leading-5 text-gray-400">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
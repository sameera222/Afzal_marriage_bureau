import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2A2420] py-12 text-white sm:py-14">

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">

        {/* BRAND */}

        <div>

          <Link href="/" className="inline-block">
            <h3 className="text-xl font-bold">
              Afzal Marriage Bureau
            </h3>
          </Link>

          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
            Connecting hearts and building meaningful relationships.
          </p>

        </div>


        {/* QUICK LINKS */}

        <FooterColumn
          title="Quick Links"
          items={[
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Profiles", "/profiles"],
            ["Contact", "/contact"],
          ]}
        />


        {/* MEMBERS */}

        <FooterColumn
          title="Members"
          items={[
            ["Register", "/register"],
            ["Login", "/login"],
            ["Membership", "/membership"],
            ["Privacy Policy", "#"],
          ]}
        />


        {/* CONTACT */}

        <div>

          <h4 className="font-semibold">
            Contact
          </h4>

          <div className="mt-4 space-y-3 text-sm text-gray-400">

            <p>
              📞 Contact Bureau
            </p>

            <p>
              ✉️ Email Us
            </p>

            <p>
              📍 Our Location
            </p>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-gray-500 sm:px-6">

        © {new Date().getFullYear()} Afzal Marriage Bureau.
        All rights reserved.

      </div>

    </footer>
  );
}


/* Footer Column */

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div>

      <h4 className="font-semibold">
        {title}
      </h4>

      <div className="mt-4 space-y-3">

        {items.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="block text-sm text-gray-400 transition hover:text-white"
          >
            {label}
          </Link>
        ))}

      </div>

    </div>
  );
}
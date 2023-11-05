import { forwardRef } from "react";
import { useRouter } from "next/router";
import { HomeIcon, DocumentChartBarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const navigationList = [
  {
    link: "/",
    icon: (
      <>
        <HomeIcon className="h-5 w-5" />
      </>
    ),
    title: "Home",
  },
  {
    link: "/input",
    icon: (
      <>
        <DocumentChartBarIcon className="h-5 w-5" />
      </>
    ),
    title: "Input",
  },
];

const Sidebar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
  console.log(showNav);
  return (
    <div ref={ref} className="fixed w-56 h-full z-50 bg-slate-900 shadow-sm">
      {/* Logo */}
      <div className="flex justify-center mt-6 mb-14 text-white">
        <picture>
          <img
            src="/Images/infiniti-4.03logo.png"
            alt="company logo"
            className="w-32 h-auto"
          />
        </picture>
      </div>

      {/* Navigation Page */}
      <div className="flex flex-col">
        {navigationList?.map((list, index) => (
          <Link href={`${list?.link}`} passHref key={index}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == list?.link
                  ? "text-slate-200"
                  : "text-white hover:text-slate-200"
              }`}
            >
              <div className="mr-2">{list?.icon}</div>
              <div>
                <p>{list?.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;

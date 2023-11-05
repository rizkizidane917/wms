import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";

export default function Header({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] bg-white z-30 ${
        showNav ? "pl-56" : ""
      }`}
      style={{
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",
        boxShadow:
          "0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset, 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Menu Bar */}
      <div className="pl-4 md:pl-16 ">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      {/* <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <p>Menu</p>
              <span className="hidden md:block font-medium text-gray-700">
                Lah??
              </span>
            </Menu.Button>
          </div>
        </Menu>
      </div> */}
    </div>
  );
}

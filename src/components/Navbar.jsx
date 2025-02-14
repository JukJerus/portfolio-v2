import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: 'Home', href: '#', },
  { name: 'About', href: '#', },
  { name: 'Skill', href: '#', },
  { name: 'Project', href: '#', },
  { name: 'Certificate', href: '#', },
  { name: 'Contact', href: '#', },
]
export default function Navbar() {
  return (
    <div className="relative">
      <h1 className="absolute md:ml-18 text-white self-center font-poppins font-bold text-2xl top-4 pl-4">Portfolio</h1>
      <Disclosure as="nav" className={`relative`}>
      <div className="mx-auto px-2 sm:px-6 md:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex left-76 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center  md:justify-end">
            <div className="hidden md:ml-6 md:block ">
              <div className="flex space-x-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden bg-gray-950 w-full origin-top absolute z-50 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0" transition>
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className= 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>
  );
}

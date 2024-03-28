'use client';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow w-full">
      {({ open }) => (
        <>
          <div className="flex py-3 px-6 justify-between w-full bg-[#080908]">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-5 w-auto"
                src="/images/logo.svg"
                alt="Your Company"
                width={200}
                height={20}
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center gap-3">
              <div
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Join Coreum
              </div>
              <div
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/github-navbar.svg"
                  alt="Coreum Github"
                  width={32}
                  height={32}
                />
              </div>
              <div
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/twitter-navbar.svg"
                  alt="Coreum Twitter"
                  width={32}
                  height={32}
                />
              </div>
              <div
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/instagram-navbar.svg"
                  alt="Coreum Instagram"
                  width={32}
                  height={32}
                />
              </div>
              <div
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/telegram-navbar.svg"
                  alt="Coreum Telegram"
                  width={32}
                  height={32}
                />
              </div>
              <div
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/discord-navbar.svg"
                  alt="Coreum Discord"
                  width={32}
                  height={32}
                />
              </div>
              <div
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/youtube-navbar.svg"
                  alt="Coreum Youtube"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-1 justify-center px-2">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8369 18.2709L14.3401 13.7742C15.5656 12.2755 16.1681 10.3631 16.023 8.4326C15.878 6.50212 14.9965 4.70124 13.5609 3.40246C12.1253 2.10368 10.2454 1.40636 8.31007 1.45475C6.37475 1.50314 4.53207 2.29353 3.16317 3.66243C1.79426 5.03134 1.00387 6.87402 0.955485 8.80934C0.907096 10.7447 1.60441 12.6245 2.90319 14.0601C4.20197 15.4957 6.00285 16.3772 7.93333 16.5223C9.86382 16.6673 11.7762 16.0648 13.2749 14.8394L17.7717 19.3362C17.9137 19.4734 18.104 19.5493 18.3016 19.5476C18.4991 19.5459 18.688 19.4667 18.8277 19.327C18.9674 19.1873 19.0466 18.9984 19.0483 18.8008C19.0501 18.6033 18.9741 18.413 18.8369 18.2709ZM8.51073 15.0368C7.31874 15.0368 6.15352 14.6833 5.16242 14.0211C4.17132 13.3589 3.39885 12.4176 2.9427 11.3164C2.48655 10.2151 2.36719 9.00331 2.59974 7.83423C2.83229 6.66515 3.40628 5.59127 4.24914 4.74841C5.09201 3.90555 6.16588 3.33155 7.33496 3.09901C8.50405 2.86646 9.71583 2.98581 10.8171 3.44197C11.9183 3.89812 12.8596 4.67059 13.5218 5.66169C14.1841 6.65279 14.5375 7.81801 14.5375 9.01C14.5357 10.6079 13.9002 12.1397 12.7703 13.2696C11.6405 14.3995 10.1086 15.035 8.51073 15.0368Z" fill="#5E6773"/>
                      </svg>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md !border-0 bg-[#101216] py-1.5 pl-10 pr-3 text-text-[#5E6773] placeholder:text-[#5E6773] outline-none focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2 bg-[#080908]">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Join Coreum
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/github.png"
                  alt="Coreum Github"
                  width={32}
                  height={32}
                />
                Coreum Github
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/twitter.png"
                  alt="Coreum Twitter"
                  width={32}
                  height={32}
                />
                Coreum Twitter
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/instagram.png"
                  alt="Coreum Instagram"
                  width={32}
                  height={32}
                />
                Coreum Instagram
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/telegram.png"
                  alt="Coreum Telegram"
                  width={32}
                  height={32}
                />
                Coreum Telegram
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/discord.png"
                  alt="Coreum Discord"
                  width={32}
                  height={32}
                />
                Coreum Discord
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="flex items-center w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Image
                  className="h-8 w-8"
                  src="/images/youtube.png"
                  alt="Coreum Youtube"
                  width={32}
                  height={32}
                />
                Coreum Youtube
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

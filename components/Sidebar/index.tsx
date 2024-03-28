'use client';

import { Disclosure } from '@headlessui/react'
import classNames from 'classnames';
import { NavigationItem } from '@/app/docs/layout';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  children: React.ReactNode;
  navigation: NavigationItem[];
}

const renderNavigationItems = (items: NavigationItem[]) => {
  if (!items) return null;

  return items.map((item) => (
    <li key={item.name}>
      {!item.children ? (
        <a
          href={item.href}
          className={classNames(
            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white capitalize'
          )}
        >
          {item.name}
        </a>
      ) : (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={classNames(
                  open ? 'bg-[#17191E] text-[#eeeeee]' : 'text-[#868991]',
                  'flex items-center w-full rounded-lg p-3 pr-2 gap-x-6 text-base font-normal text-[#868991] capitalize'
                )}
              >
                {item.name}
                <ChevronRightIcon
                  className={`w-3 h-3 ml-auto ${open ? 'transform rotate-90' : 'transform rotate-0'}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="ul" className="my-2 ml-4 px-2 border-l border-l-1 border-[#17191E]">
                {renderNavigationItems(item.children || [])}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )}
    </li>
  ));
};

export const Sidebar: React.FC<SidebarProps> = ({ children, navigation }) => {
  return (
    <div className="flex flex-row w-full h-auto min-h-full flex-1 font-['space grotesk'] ">
      <div className="flex w-72">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#101216] p-6">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {renderNavigationItems(navigation)}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] flex-1">
        {children}
      </main>
    </div>
  );
};

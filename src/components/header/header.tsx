import Link from 'next/link';
import dynamic from 'next/dynamic';

import { SelectTheme } from './select-theme';
import Search from "@/components/header/top-search";

const Burger = dynamic(() => import('./burger'));

function Header() {
  return (
    <header className="sticky top-0 z-20 flex w-full h-[3rem] py-3 mx-auto border-b border-gray-200 backdrop-blur supports-backdrop-blur:bg-white/80 dark:border-gray-800 dark:supports-backdrop-blur:bg-gray-900/25">
      <div className="flex items-center justify-between px-4 w-full h-full mx-auto max-w-full lg:max-w-8xl">
        <div className="flex items-center">
          <Burger />
          <Link href="/docs" className="flex flex-row items-center font-bold text-gray-600 dark:text-white" passHref>
            <span className="flex items-center">
              <img src="/favicon.ico" alt="favicon" style={{ width: '30px', height: '30px', marginRight: '5px' }}/>
              <b>Tilil Technologies</b>
            </span>
          </Link>
        </div>
        <div className="flex space-x-2 items-center">
          <Search />
          <SelectTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;

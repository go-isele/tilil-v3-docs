import { Fragment, useState } from 'react';
import { BellAlertIcon } from '@heroicons/react/20/solid';
import { Dialog, Transition } from '@headlessui/react';

function Search() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setOpen(true)}
          className="
            inline-flex
            items-center
            justify-center
            
            p-2
            rounded-md
            border
            border-gray-300
            
            text-gray-600
            hover:text-gray-700
            
            dark:text-white
            dark:border-gray-600
            dark:hover:text-gray-400
          "
          aria-label="Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="min-h-screen px-4 text-center">
            {/* Overlay */}
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

            {/* Dialog Content */}
            <div className="inline-block align-baseline max-w-md w-full p-3 my-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title className="text-lg font-medium mb-4">
                Search
              </Dialog.Title>
              <div className="flex">
                {/* Your search input field goes here */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="ml-2 inline-flex
                    items-center
                    justify-center
                    
                    p-2
                    rounded-md
                    border
                    border-gray-300
                    
                    text-gray-600
                    hover:text-gray-700
                    
                    dark:text-grey-800
                    dark:border-gray-600
                    dark:hover:text-gray-400
                  "
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 3.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 11-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Search;




import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { Box, Button, InputLabel, MenuItem, Select } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Musicplayer from './components/Musicplayer';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function App() {

  const [isMobileView, setIsMobileView] = useState(false);
  const [active, setActive] = useState('All');

  const filters = ['All', 'Listening', 'Learning', 'Rehearsal', 'Perform'];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    if (sidebar) {
      if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }


    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const updateView = () => {
      // Adjust condition to ensure toggle button only shows for proper mobile screens
      setIsMobileView(window.innerWidth > 320 && window.innerWidth <= 768);
    };

    updateView(); // Check view size on mount
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div>
            {/* <header className="main-header">
              {isMobileView && (
                <button className="toggle-button" onClick={toggleSidebar}>
                  ☰
                </button>
              )}
              <div className="left-section">
                <a href="/library" className="back-button">← Back to Library</a>
              </div>
              <div className="center-section">
                <input type="text" className="search-bar" placeholder="Search..." />
              </div>
              <div className="right-section">
                <a href="/premium" className="premium">Premium</a>
                <a href="/app" className="get-app">Get app</a>
                <a href="/notifications" className="notifications">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58644 20C8.68644 20 9.58644 19.1 9.58644 18H5.58644C5.58644 19.1 6.47644 20 7.58644 20ZM13.5864 14V9C13.5864 5.93 11.9464 3.36 9.08644 2.68V2C9.08644 1.17 8.41644 0.5 7.58644 0.5C6.75644 0.5 6.08644 1.17 6.08644 2V2.68C3.21644 3.36 1.58644 5.92 1.58644 9V14L0.296477 15.29C-0.333523 15.92 0.106477 17 0.996477 17H14.1664C15.0564 17 15.5064 15.92 14.8764 15.29L13.5864 14Z" fill="#312522" />
                  </svg>

                </a>
                <a href="/profile" className="profile">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5859 0C7.29965 0 0.585938 6.71371 0.585938 15C0.585938 23.2863 7.29965 30 15.5859 30C23.8722 30 30.5859 23.2863 30.5859 15C30.5859 6.71371 23.8722 0 15.5859 0ZM15.5859 5.80645C18.5255 5.80645 20.9085 8.18952 20.9085 11.129C20.9085 14.0685 18.5255 16.4516 15.5859 16.4516C12.6464 16.4516 10.2634 14.0685 10.2634 11.129C10.2634 8.18952 12.6464 5.80645 15.5859 5.80645ZM15.5859 26.6129C12.0355 26.6129 8.85408 25.004 6.72505 22.4879C7.86215 20.3468 10.088 18.871 12.6827 18.871C12.8279 18.871 12.973 18.8952 13.1121 18.9375C13.8984 19.1915 14.721 19.3548 15.5859 19.3548C16.4509 19.3548 17.2795 19.1915 18.0597 18.9375C18.1988 18.8952 18.344 18.871 18.4892 18.871C21.0839 18.871 23.3097 20.3468 24.4468 22.4879C22.3178 25.004 19.1363 26.6129 15.5859 26.6129Z" fill="#312522" />
                  </svg>

                </a>
              </div>
            </header> */}
            <Disclosure as="nav" className="">
              <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <DisclosureButton onClick={toggleSidebar} className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                    </DisclosureButton>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                      {/* <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                        className="h-8 w-auto"
                      /> */}
                    </div>
                    {/* <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div> */}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a href="/app" className="get-app">Get app</a>

                    <button
                      type="button"
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="size-8 rounded-full"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          >
                            Your Profile
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          >
                            Settings
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          >
                            Sign out
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                   <div><Sidebar/></div>
                </div>
              </DisclosurePanel>
            </Disclosure>
            <div className="filter-bar">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-button ${active === filter ? 'active' : ''}`}
                  onClick={() => setActive(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <Header />
          <Calendar />
          <Footer />
        </div>
      </div>
      <Musicplayer />
    </>
  );
}

export default App;

import { useState, useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  // const [darkMode, setDarkMode] = useState('light')
  const [darkModeOver, setDarkModeOver] = useState('')
  const [darkIcon, setDarkIcon] = useState(
    'fa-sun fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-200'
  )
  const { isAuthenticated, currentUser, logOut } = useAuth()
  let icon = ''

  const toggleDarkMode = () => {
    if (darkModeOver === 'light') {
      console.log(darkModeOver)
      // setDarkModeOver('dark')
      localStorage.theme = 'dark'
      setDarkIcon(
        'fa-sun fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-200'
      )
      setDarkModeOver('dark')
    } else {
      // setDarkModeOver('light')
      console.log(darkModeOver)
      localStorage.theme = 'light'
      icon = 'fa-moon'
      setDarkModeOver('light')
      setDarkIcon(
        'fa-moon fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-200'
      )
    }
  }

  // if (
  //   localStorage.theme === 'dark' ||
  //   (!('theme' in localStorage) &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches)
  // ) {
  //   localStorage.theme = 'dark'

  // } else {
  //   localStorage.theme = 'light'
  // }

  // Whenever the user explicitly chooses light mode

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (prefersDark) {
      setDarkModeOver('dark')
      setDarkIcon(
        'fa-sun fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-200'
      )
    } else {
      setDarkModeOver('light')
      setDarkIcon(
        'fa-moon fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-200'
      )
    }
  }, [])

  return (
    <div className={darkModeOver}>
      <div>
        <header
          className={
            'bor sticky top-0 z-50  flex w-full items-center justify-between border-emerald-200 bg-emerald-200 px-2 py-1 text-left dark:bg-neutral-900 '
          }
        >
          <ul>
            <div className="buttons flex justify-center ">
              <Link to={routes.home()}>
                <div className=" m-2 flex items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:border-emerald-200  dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <div className=" flex flex-col">
                    {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                    <i className="fa-duotone fa-home  p-1 text-emerald-500 dark:text-emerald-200"></i>
                  </div>
                </div>
              </Link>
              <Link to={routes.viewTopics()}>
                <div className=" m-2 flex  items-center rounded-lg  bg-white p-2 shadow hover:bg-yellow-100 dark:border-emerald-200  dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <div className=" flex flex-col">
                    {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                    <i className="fa-duotone fa-messages-dollar  p-1 text-emerald-500 dark:text-emerald-200 "></i>
                  </div>
                </div>
              </Link>
              <Link to={routes.submitResponse()}>
                <div className=" m-2 flex  items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:border-emerald-200  dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <div className=" flex flex-col">
                    {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                    <i className="fa-duotone fa-pencil p-1 text-emerald-500 dark:text-emerald-200 "></i>
                  </div>
                </div>
              </Link>
              <Link to={routes.chooseTopic()}>
                <div className=" m-2 flex  items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:border-emerald-200  dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <div className=" flex flex-col">
                    {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                    <i className="fa-duotone fa-messages-question p-1 text-emerald-500 dark:text-emerald-200"></i>
                  </div>
                </div>
              </Link>
              {isAuthenticated ? (
                <div>
                  <span>Logged in as {currentUser.email}</span>{' '}
                  <button type="button" onClick={logOut}>
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()}>
                  <div className=" m-2 flex items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:border-emerald-200  dark:bg-neutral-900 dark:hover:bg-neutral-800  ">
                    <div className=" flex flex-col">
                      {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                      <i className="fa-duotone fa-square-user  p-1 text-emerald-500 dark:text-emerald-200"></i>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </ul>
          <div className="settings">
            <button onClick={toggleDarkMode}>
              <i className={darkIcon}></i>
            </button>
          </div>
        </header>
        <main className={'dark:bg-neutral-900  dark:text-emerald-200'}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout

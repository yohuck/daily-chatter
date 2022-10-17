import { useState, useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  const path = window.location.pathname
  console.log(path)
  const [darkModeOver, setDarkModeOver] = useState('')
  const [inProp, setInProp] = useState(true)

  const [darkIcon, setDarkIcon] = useState(
    'fa-sun fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-300 '
  )
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const toggleDarkMode = () => {
    if (darkModeOver === 'light') {
      setInProp(!inProp)
      localStorage.theme = 'dark'
      setDarkIcon(
        'fa-sun fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-300'
      )
      setDarkModeOver('dark')
    } else {
      setInProp(!inProp)

      localStorage.theme = 'light'

      setDarkModeOver('light')
      setDarkIcon(
        'fa-moon fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-300'
      )
    }
  }

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (prefersDark) {
      setDarkModeOver('dark')
      setDarkIcon(
        'fa-sun fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-300'
      )
    } else {
      setDarkModeOver('light')
      setDarkIcon(
        'fa-moon fa-duotone fa-med dark:fa-moon p-1 text-emerald-500 dark:text-emerald-300'
      )
    }
  }, [])

  return (
    <div className={darkModeOver}>
      <div className="dark:bg-gradient-b flex flex-col items-center justify-center bg-gradient-to-b from-emerald-100 to-blue-100 dark:from-neutral-900 dark:to-neutral-900">
        <header
          className={
            'bor sticky top-0 z-50  flex w-full items-center justify-between border-emerald-400 bg-emerald-400 px-2 py-1 text-left dark:bg-neutral-900 '
          }
        >
          <ul>
            <div className="buttons flex justify-center ">
              <Link to={routes.home()}>
                <div className=" m-2 flex items-center rounded-lg  bg-slate-100 p-2 shadow   hover:bg-violet-100 hover:ring hover:ring-violet-500 focus:bg-violet-100 focus:ring focus:ring-violet-500 dark:border-emerald-400  dark:bg-neutral-900  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  <div className=" flex flex-col">
                    {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                    <i
                      className={
                        path === '/'
                          ? 'fa-duotone fa-coin  p-1 text-violet-500'
                          : 'fa-duotone fa-coin  p-1 text-emerald-500'
                      }
                    ></i>
                  </div>
                </div>
              </Link>

              <Link to={routes.submitResponse()}>
                <div className=" m-2 flex items-center rounded-lg  bg-slate-100 p-2 shadow   hover:bg-violet-100 hover:ring hover:ring-violet-500 focus:bg-violet-100 focus:ring focus:ring-violet-500 dark:border-emerald-400  dark:bg-neutral-900  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  <div className=" flex flex-col">
                    {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                    <i
                      className={
                        path === '/submit-response'
                          ? 'fa-duotone fa-pencil  p-1 text-violet-500'
                          : 'fa-duotone fa-pencil  p-1 text-emerald-500'
                      }
                    ></i>
                  </div>
                </div>
              </Link>
              <Link to={routes.chooseTopic()}>
                <div className=" m-2 flex items-center rounded-lg  bg-slate-100 p-2 shadow   hover:bg-violet-100 hover:ring hover:ring-violet-500 focus:bg-violet-100 focus:ring focus:ring-violet-500 dark:border-emerald-400  dark:bg-neutral-900  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  <div className=" flex flex-col">
                    {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                    <i
                      className={
                        path === '/choose-topic'
                          ? 'fa-duotone fa-list  p-1 text-violet-500'
                          : 'fa-duotone fa-list  p-1 text-emerald-500'
                      }
                    ></i>
                  </div>
                </div>
              </Link>
              {isAuthenticated ? (
                <div>
                  <Link to={routes.settings()}>
                    <button
                      className=" m-2 flex items-center rounded-lg  bg-slate-100 p-2 shadow   hover:bg-violet-100 hover:ring hover:ring-violet-500 focus:bg-violet-100 focus:ring focus:ring-violet-500 dark:border-emerald-400  dark:bg-neutral-900  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      type="button"
                      // onClick={logOut}
                    >
                      <i
                        className={
                          path === '/settings'
                            ? 'fa-duotone fa-user  p-1 text-violet-500'
                            : 'fa-duotone fa-user  p-1 text-emerald-500'
                        }
                      ></i>
                    </button>
                  </Link>
                  {/* <span>Logged in as {currentUser.email}</span>{' '} */}
                </div>
              ) : (
                <Link to={routes.login()}>
                  <div className=" m-2 flex items-center rounded-lg  bg-slate-100 p-2 shadow   hover:bg-violet-100 hover:ring hover:ring-violet-500 focus:bg-violet-100 focus:ring focus:ring-violet-500 dark:border-emerald-400  dark:bg-neutral-900  dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ">
                    <div className=" flex flex-col">
                      {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                      <i
                        className={
                          path === '/login'
                            ? 'fa-duotone fa-user  p-1 text-violet-500'
                            : 'fa-duotone fa-user  p-1 text-emerald-500'
                        }
                      ></i>
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
        <main
          className={
            'min-h-screen  p-5 dark:bg-neutral-900 dark:text-emerald-400'
          }
        >
          {children}
        </main>
        <footer className="space-between flex w-screen">
          <div
            className="flex w-screen flex-wrap items-center justify-center gap-5 bg-emerald-500 p-5 dark:bg-neutral-900 dark:hover:text-neutral-400"
            target="_blank"
          >
            <a
              href="https://github.com/yohuck/daily-chatter"
              className="flex items-center gap-1 hover:text-emerald-800 dark:text-emerald-500"
            >
              <i
                href="https://github.com/yohuck/daily-chatter"
                className="fa-brands fa-github fa-1.5x"
                rel="noreferrer"
              ></i>
              Project Repo
            </a>
            <p>|</p>
            <a
              href="https://github.com/yohuck"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-neutral-400"
            >
              <i
                href="https://github.com/yohuck"
                className="fa-brands fa-github fa-1.5x "
                rel="noreferrer"
              ></i>
              <p>Eric</p>
            </a>{' '}
            |
            <a
              href="https://github.com/jgood13"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-neutral-400"
            >
              <i
                href="https://github.com/jgood13"
                className="fa-brands fa-github fa-1.5x"
                rel="noreferrer"
              >
                {' '}
              </i>
              <p> Joe</p>
            </a>
            |
            <a
              href="https://github.com/itsmejustino"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-neutral-400"
            >
              <i
                href="https://github.com/itsmejustino"
                className="fa-brands fa-github fa-1.5x"
                rel="noreferrer"
              >
                {'   '}
              </i>
              <p> Justin</p>
            </a>
            |
            <a
              href="https://github.com/MichaelFisher-01/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-neutral-400"
            >
              <i
                href="https://github.com/MichaelFisher-01/"
                className="fa-brands fa-github fa-1.5x"
                rel="noreferrer"
              ></i>
              <p>Michael</p>
            </a>{' '}
            |
            <a
              href="https://github.com/Jaajarbinks"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-neutral-400"
            >
              <i
                href="https://github.com/Jaajarbinks"
                className="fa-brands fa-github fa-1.5x"
                rel="noreferrer"
              ></i>
              <p>David</p>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout

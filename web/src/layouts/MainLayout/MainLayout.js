import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  console.log(currentUser, isAuthenticated)
  return (
    <div className="bg min-h-screen bg-gradient-to-r from-neutral-200 to-zinc-200 font-mono ">
      <header className="sticky top-0 z-50  flex w-full justify-center px-2  py-1 text-left dark:bg-neutral-900 xl:justify-start">
        <div className="buttons flex justify-center ">
          <Link to={routes.home()}>
            <div className=" m-2 flex flex items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ">
              <div className=" flex flex-col">
                {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                <i className="fa-duotone fa-home fa-2x p-1 text-emerald-500 dark:text-emerald-200"></i>
              </div>
            </div>
          </Link>

          <Link to={routes.submitResponse()}>
            <div className=" m-2 flex flex items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <div className=" flex flex-col">
                {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                <i className="fa-duotone fa-pencil fa-2x p-1 text-emerald-500 dark:text-emerald-200 "></i>
              </div>
            </div>
          </Link>
          <Link to={routes.chooseTopic()}>
            <div className=" m-2 flex flex items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <div className=" flex flex-col">
                {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                <i className="fa-duotone fa-messages-question fa-2x p-1 text-emerald-500 dark:text-emerald-200"></i>
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
              <div className=" m-2 flex flex items-center rounded-lg bg-white p-2 shadow hover:bg-yellow-100 dark:bg-neutral-900 dark:hover:bg-neutral-800  ">
                <div className=" flex flex-col">
                  {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                  <i className="fa-duotone fa-square-user fa-2x p-1 text-emerald-500 dark:text-emerald-200"></i>
                </div>
              </div>
            </Link>
          )}
        </div>
      </header>
      <main className="dark:bg-neutral-900 dark:text-emerald-200">
        {children}
      </main>
    </div>
  )
}

export default MainLayout

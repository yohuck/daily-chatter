import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  console.log(currentUser, isAuthenticated)
  return (
    <div className=" min-h-screen bg-gradient-to-r from-emerald-500 to-emerald-700 font-mono ">
      <header className="flex sticky top-0 z-50 mb-6 w-full justify-center xl:justify-start bg-yellow-400 px-2 py-1 text-left">
        <div className="buttons flex justify-center">
          <Link to={routes.home()}>
            <div className=" flex flex m-2 items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
              <div className=" flex flex-col">
                {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                <i className="fa-duotone fa-home fa-2x p-1 text-emerald-500"></i>
              </div>
            </div>
          </Link>



          <Link to={routes.submitResponse()}>
            <div className=" flex flex m-2 items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
              <div className=" flex flex-col">
                {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                <i className="fa-duotone fa-pencil fa-2x p-1 text-emerald-500"></i>
              </div>
            </div>
          </Link>
          <Link to={routes.chooseTopic()}>
            <div className=" flex flex m-2 items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
              <div className=" flex flex-col">
                {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                <i className="fa-duotone fa-messages-question fa-2x p-1 text-emerald-500"></i>
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
              <div className=" flex flex m-2 items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
                <div className=" flex flex-col">
                  {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
                  <i className="fa-duotone fa-square-user fa-2x p-1 text-emerald-500"></i>
                </div>
              </div>
            </Link>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout

import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <div className=" bg-gradient-to-r from-emerald-500 to-emerald-700 font-mono min-h-screen ">
      <header className="sticky top-0 z-50 mb-6 flex w-full justify-between bg-yellow-400 px-2 py-1 text-left">
        <div className="buttons flex">
          <div className=" m-2 flex flex items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
            <div className=" flex flex-col">
              {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
              <i className="fa-duotone fa-coin fa-2x p-1 text-emerald-500"></i>
            </div>
          </div>
          <div className=" m-2 flex flex items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
            <div className=" flex flex-col">
              {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
              <i className="fa-duotone fa-badge-dollar fa-2x p-1 text-emerald-500"></i>
            </div>
          </div>
          <div className=" m-2 flex flex items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
            <div className=" flex flex-col">
              {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
              <i className="fa-duotone fa-user fa-2x p-1 text-emerald-500"></i>
            </div>
          </div>
          <div className=" m-2 flex flex items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
            <div className=" flex flex-col">
              {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
              <i className="fa-duotone fa-gear fa-2x p-1 text-emerald-500"></i>
            </div>
          </div>
        </div>

        <nav>
          <ul className="flex flex-col">
            <li className="">
              <Link to={routes.home()}>Home</Link>
            </li>
            <li className="">
              <Link to={routes.about()}>About</Link>
            </li>
            <li className="">
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout

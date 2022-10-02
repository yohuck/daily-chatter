import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-400 font-mono">
      <header className="sticky top-0 w-full border-b-4 border-black bg-gradient-to-r from-emerald-500 to-teal-500 box-decoration-slice px-7 py-1 text-center ">
        <h1 className="text-6xl font-black text-black">Pennywrite</h1>
        <p className="text-xl text-black">What are your thoughts worth?</p>
        <nav>
          <ul>
            <li className="">
              <Link to={routes.home()}>Home</Link>
            </li>
            <li className="">
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout

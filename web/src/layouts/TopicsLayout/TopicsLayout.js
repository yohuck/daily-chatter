import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const TopicsLayout = ({ children }) => {
  return (
    <div className='bg-yellow-400 p-5'>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.topics()} className=" text-black border-4 p-2 border-black">
            Categories
          </Link>
        </h1>
        <Link to={routes.newTopic()} className="font-bold flex">
          <div className="rw-button-icon">+</div> New Topic
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TopicsLayout

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ResponsesLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.responses()} className="rw-link">
            Responses
          </Link>
        </h1>
        <Link to={routes.newResponse()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Response
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ResponsesLayout

import { Form, TextAreaField, TextField, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <nav className=" m-2 flex justify-end rounded-lg bg-sky-100 p-2 shadow ">
        <ul className="flex flex-row">
          <li className=" rounded-lg hover:bg-yellow-100">
            <Link to={routes.home()}>Home</Link>
          </li>
          <li className="rounded-lg hover:bg-yellow-100">
            <Link to={routes.about()}>About</Link>
          </li>
          <li className="rounded-lg hover:bg-yellow-100">
            <Link to={routes.contact()}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="m-16 flex justify-around rounded-lg bg-sky-100 shadow">
        <Form
          className="flex flex-col place-items-center gap-1"
          onSubmit={onSubmit}
        >
          <label htmlFor="name">Name</label>
          <TextField
            className="m-2 rounded-lg bg-amber-50  shadow "
            name="name"
          />

          <label htmlFor="email">Email</label>
          <TextField
            className="m-2 rounded-lg bg-amber-50 shadow "
            name="email"
          />

          <label htmlFor="message">Message</label>
          <TextAreaField
            className="m-2 w-80 resize-none rounded-lg bg-amber-50 shadow "
            name="message"
            rows="8"
          />

          <Submit>
            <i className="fa-solid fa-paper-plane hover:text-gray-500"></i>
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default ContactPage

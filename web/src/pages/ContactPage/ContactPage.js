import { Form, TextAreaField, TextField, Submit } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_MESSAGE = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create, { loading, error }] = useMutation(CREATE_MESSAGE)
  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
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
            name="messageContent"
            rows="8"
          />

          <Submit disabled={loading}>
            <i className="fa-solid fa-paper-plane hover:text-gray-500"></i>
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default ContactPage

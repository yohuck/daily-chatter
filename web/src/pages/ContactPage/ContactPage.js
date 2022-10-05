import {
  Form,
  Label,
  TextAreaField,
  TextField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
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

      <div className="flex items-center justify-center">
        <div className="flex w-96 justify-center rounded-lg bg-sky-100 shadow">
          <Form
            className="flex flex-col place-items-center justify-center"
            onSubmit={onSubmit}
            config={{ mode: 'onBlur' }}
          >
            <Label
              name="name"
              className="font-bold"
              errorClassName="text-red-500"
            >
              Name:
            </Label>
            <TextField
              className="m-2 rounded-lg bg-amber-50  shadow "
              name="name"
              validation={{ required: true }}
              errorClassName="border-red-500 border border-red-500 m-2 rounded-lg bg-amber-50  shadow-error "
            />
            <FieldError name="name" className="text-red-500" />
            <Label
              name="email"
              className="font-bold"
              errorClassName="text-red-500"
            >
              Email:
            </Label>
            <TextField
              className="m-2 rounded-lg bg-amber-50 shadow "
              name="email"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^.]+\..+$/,
                  message: 'Please enter a valid email address',
                },
              }}
              errorClassName="border-red-500 border border-red-500 m-2 rounded-lg bg-amber-50  shadow-error "
            />
            <FieldError name="email" className="text-red-500" />
            <Label
              name="messageContent"
              className="font-bold"
              errorClassName="text-red-500"
            >
              Message:
            </Label>
            <TextAreaField
              className="m-2 w-80 resize-none rounded-lg bg-amber-50 shadow "
              name="messageContent"
              rows="8"
              validation={{ required: true }}
              errorClassName="m-2 w-80 resize-none rounded-lg bg-amber-50 shadow-error"
            />
            <FieldError name="message" className="text-red-500" />
            <Submit
              className="m-2 flex items-center justify-center rounded-lg bg-white p-2 shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500"
              disabled={loading}
            >
              <i className="fa-solid fa-send   hover:text-gray-500"></i>
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ContactPage

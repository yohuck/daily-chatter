import {
  Form,
  Label,
  TextAreaField,
  TextField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const PromptInput = ({ prompt }) => {
  const onSubmit = (data) => {
    console.log(data)
    // create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags
        title="Respond to Prompt"
        description="Respond to the prompt of the day"
      />

      <div className="flex max-w-sm items-center justify-center">
        <div className="flex justify-center rounded-lg bg-sky-200 shadow">
          <Form
            className="flex flex-col place-items-center justify-center "
            onSubmit={onSubmit}
            config={{ mode: 'onBlur' }}
          >
            <h2 className="font-bold">{prompt.date}</h2>
            <div className="prompt inner-shadow m-2 rounded-lg bg-sky-100 p-2 text-center shadow">
              <p className="m-2 text-2xl font-bold">{prompt.title}</p>
              <p className="text-xl">{prompt.body}</p>
            </div>
            <Label
              name="response"
              className="font-bold"
              errorClassName="text-red-500"
            >
              Your answer:
            </Label>
            <div className="relative m-0">
              <TextAreaField
                className="m-2 w-80 resize-none rounded-lg bg-sky-100 shadow inner-shadow"
                name="response"
                rows="8"
                validation={{ required: true }}
                errorClassName="m-2 w-80 resize-none rounded-lg bg-green-50 shadow-error"
              />
              <p className="absolute bottom-5 right-3 rounded-md bg-green-200 p-2 opacity-80">
                500
              </p>
            </div>
            <FieldError name="response" className="text-red-500" />
            <Submit
              className="m-2 flex items-center justify-center rounded-lg bg-white p-2 shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500"
              // disabled={loading}
            >
              <i className="fa-solid fa-send   hover:text-gray-500"></i>
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default PromptInput

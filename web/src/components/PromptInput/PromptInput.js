import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextAreaField,
  TextField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_RESPONSE_MUTATION = gql`
  mutation CreateResponseMutationtwo($input: CreateResponseInput!) {
    createResponse(input: $input) {
      id
      userId
      promptId
      body
    }
  }
`

const PromptInput = ({ prompt }) => {
  const { currentUser } = useAuth()
  const [createResponse] = useMutation(CREATE_RESPONSE_MUTATION, {
    onComplted: () => {
      console.log('response created')
    },
    onError: (error) => {
      console.log(error)
    },
  })
  const onSubmit = (input) => {
    input = {
      userId: currentUser.id,
      promptId: prompt.id,
      body: input.body,
    }
    // console.log(prompt.id)
    console.log([currentUser.id, prompt.id, input.body])
    createResponse({
      variables: { input },
    })
  }

  const [state, setState] = React.useState({
    wordCount: 0,
    charCount: 0,
  })

  const handleKeyPress = (e) => {
    const count = e.target.value

    const countWords = (count) => {
      if (count.length === 0) {
        return 0
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, '')
        count = count.replace(/[ ]{2,}/gi, ' ')
        count = count.replace(/\n /, '\n')
        return count.split(' ').length
      }
    }

    setState({
      wordCount: countWords(count),
      charCount: count.length,
    })
  }

  return (
    <div className="mt-4">
      <MetaTags
        title="Respond to Prompt"
        description="Respond to the prompt of the day"
      />

      <div className="m-2 flex max-w-sm items-center justify-center">
        <div className="flex justify-center rounded-lg">
          <Form
            className="flex flex-col place-items-center justify-center rounded-lg shadow"
            onSubmit={onSubmit}
            config={{ mode: 'onBlur' }}
          >
            <h2 className="font-bold">{prompt.date}</h2>
            <div className="prompt w-11/12 rounded-lg bg-neutral-100 text-center dark:bg-neutral-800">
              <div className=" w-full rounded-t-lg  border-black bg-emerald-200 p-2 text-center text-xl font-bold text-neutral-900">
                <p className="m-2 text-2xl font-bold">{prompt.title}</p>
              </div>
              <p className="p-5 text-xl">{prompt.body}</p>
            </div>
            <Label
              name="response"
              className="mt-2 w-11/12 rounded-t-lg bg-emerald-200 p-2 text-center text-xl font-bold text-neutral-900"
              errorClassName="mt-2 w-11/12 rounded-t-lg bg-emerald-200 p-2 text-center text-xl font-bold text-red-900"
            >
              Your answer:
            </Label>
            <div className="relative m-0 flex w-full justify-center">
              <TextAreaField
                className=" w-11/12 resize-none rounded-b-lg bg-neutral-100 pt-2 pl-2 dark:bg-neutral-800"
                name="body"
                rows="8"
                id="responseBody"
                validation={{ required: true }}
                errorClassName=" w-11/12 resize-none rounded-b-lg shadow-error dark:bg-stone-900"
                onChange={handleKeyPress}
              />
              <p className="absolute bottom-0 right-4 rounded-md bg-emerald-200 p-2 opacity-60 dark:text-neutral-900">
                {500 - state.charCount}
              </p>
            </div>
            <FieldError name="response" className="text-red-900" />
            <Submit
              className="m-2 flex items-center justify-center rounded-lg  p-2 shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500"
              // disabled={loading}
            >
              <i className="fa-solid fa-send   hover:text-gray-500"></i>
            </Submit>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PromptInput

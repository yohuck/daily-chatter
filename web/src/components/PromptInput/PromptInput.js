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

  const [state, setState] = React.useState({
    wordCount: 0,
    charCount: 0
  });

  const handleKeyPress = (e) => {
    const count = e.target.value;

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi,"");
        count = count.replace(/[ ]{2,}/gi," ");
        count = count.replace(/\n /,"\n");
        return count.split(' ').length;
      }
    }

    setState({
      wordCount: countWords(count),
      charCount: count.length
    });
  }


  return (
    <div className='mt-4 min-h-screen'>
      <MetaTags
        title="Respond to Prompt"
        description="Respond to the prompt of the day"
      />

      <div className="flex max-w-sm items-center justify-center m-2">
        <div className="flex justify-center rounded-lg shadow">
          <Form
            className="flex flex-col place-items-center justify-center "
            onSubmit={onSubmit}
            config={{ mode: 'onBlur' }}
          >
            <h2 className="font-bold">{prompt.date}</h2>
            <div className="prompt inner-shadow m-2 rounded-lg p-2 text-center shadow">
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
                className="m-2 w-80 resize-none rounded-lg shadow inner-shadow dark:bg-neutral-900"
                name="response"
                rows="8"
                validation={{ required: true }}
                errorClassName="m-2 w-80 resize-none rounded-lg shadow-error dark:bg-red-900"
                onChange={handleKeyPress}
              />
              <p className="absolute bottom-5 right-3 rounded-md bg-green-200 p-2 opacity-80 dark:text-neutral-900">
               {500 - state.charCount}
              </p>
            </div>
            <FieldError name="response" className="text-red-500" />
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

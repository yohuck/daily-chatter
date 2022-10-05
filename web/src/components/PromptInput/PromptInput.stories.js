// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PromptInput {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PromptInput from './PromptInput'

export const generated = () => {
  return (
    <PromptInput
      response={{
        title: 'High or Low?',
        body: 'Settle this once and for all. High rise or low?',
        user: 'L',
      }}
    />
  )
}

export default {
  title: 'Components/PromptInput',
  component: PromptInput,
}

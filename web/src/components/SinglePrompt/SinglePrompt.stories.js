// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SinglePrompt {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SinglePrompt from './SinglePrompt'

export const generated = () => {
  return <SinglePrompt />
}

export default {
  title: 'Components/SinglePrompt',
  component: SinglePrompt,
}

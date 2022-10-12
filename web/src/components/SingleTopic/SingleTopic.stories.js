// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SingleTopic {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SingleTopic from './SingleTopic'

export const generated = () => {
  return <SingleTopic />
}

export default {
  title: 'Components/SingleTopic',
  component: SingleTopic,
}

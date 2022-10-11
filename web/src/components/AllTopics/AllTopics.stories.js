// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AllTopics {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AllTopics from './AllTopics'

export const generated = () => {
  return <AllTopics />
}

export default {
  title: 'Components/AllTopics',
  component: AllTopics,
}

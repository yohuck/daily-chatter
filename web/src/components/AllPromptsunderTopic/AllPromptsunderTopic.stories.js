// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AllPrompts {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AllPrompts from './AllPrompts'

export const generated = () => {
  return <AllPrompts />
}

export default {
  title: 'Components/AllPrompts',
  component: AllPrompts,
}

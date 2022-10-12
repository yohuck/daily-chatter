// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <UsersubsComponent {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import UsersubsComponent from './UsersubsComponent'

export const generated = () => {
  return <UsersubsComponent />
}

export default {
  title: 'Components/UsersubsComponent',
  component: UsersubsComponent,
}

// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <HomePageTitles {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import HomePageTitles from './HomePageTitles'

export const generated = () => {
  return <HomePageTitles />
}

export default {
  title: 'Components/HomePageTitles',
  component: HomePageTitles,
}

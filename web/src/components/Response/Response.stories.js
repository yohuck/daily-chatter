// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Response {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Response from './Response'

export const generated = () => {
  return (
    <Response
      response={{
        title: 'Horeshoe Crab',
        body: "Sometimes I feel like I'm a seahorese. Sometimes I think that I'm a horeshoe crab. I don't have anything in common with myself except that I came from the sea, like everyone else did.",
        user: 'L',
      }}
    />
  )
}

export default {
  title: 'Components/Response',
  component: Response,
}

import { render } from '@redwoodjs/testing/web'

import HomePageTitles from './HomePageTitles'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomePageTitles', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePageTitles />)
    }).not.toThrow()
  })
})

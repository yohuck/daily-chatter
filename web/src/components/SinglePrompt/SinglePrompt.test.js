import { render } from '@redwoodjs/testing/web'

import SinglePrompt from './SinglePrompt'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SinglePrompt', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SinglePrompt />)
    }).not.toThrow()
  })
})

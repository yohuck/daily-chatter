import { render } from '@redwoodjs/testing/web'

import AllPrompts from './AllPrompts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AllPrompts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllPrompts />)
    }).not.toThrow()
  })
})

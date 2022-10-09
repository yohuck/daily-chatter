import { render } from '@redwoodjs/testing/web'

import ResponseCards from './ResponseCards'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResponseCards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResponseCards />)
    }).not.toThrow()
  })
})

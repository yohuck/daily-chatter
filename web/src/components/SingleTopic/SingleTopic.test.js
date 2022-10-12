import { render } from '@redwoodjs/testing/web'

import SingleTopic from './SingleTopic'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SingleTopic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleTopic />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing/web'

import AllTopics from './AllTopics'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AllTopics', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllTopics />)
    }).not.toThrow()
  })
})

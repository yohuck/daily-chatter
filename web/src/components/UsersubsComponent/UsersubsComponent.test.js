import { render } from '@redwoodjs/testing/web'

import UsersubsComponent from './UsersubsComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UsersubsComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UsersubsComponent />)
    }).not.toThrow()
  })
})

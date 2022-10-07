import { render } from '@redwoodjs/testing/web'

import ViewTopicsPage from './ViewTopicsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ViewTopicsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewTopicsPage />)
    }).not.toThrow()
  })
})

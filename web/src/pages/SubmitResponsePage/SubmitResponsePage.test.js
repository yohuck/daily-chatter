import { render } from '@redwoodjs/testing/web'

import SubmitResponsePage from './SubmitResponsePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SubmitResponsePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitResponsePage />)
    }).not.toThrow()
  })
})

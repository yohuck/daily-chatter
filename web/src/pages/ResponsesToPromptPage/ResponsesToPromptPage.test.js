import { render } from '@redwoodjs/testing/web'

import ResponsesToPromptPage from './ResponsesToPromptPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ResponsesToPromptPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResponsesToPromptPage />)
    }).not.toThrow()
  })
})

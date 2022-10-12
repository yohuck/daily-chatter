import { render } from '@redwoodjs/testing/web'

import DirectPromptResponsePage from './DirectPromptResponsePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DirectPromptResponsePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DirectPromptResponsePage />)
    }).not.toThrow()
  })
})

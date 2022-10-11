import { render } from '@redwoodjs/testing/web'

import ChoosePromptPage from './ChoosePromptPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChoosePromptPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChoosePromptPage />)
    }).not.toThrow()
  })
})

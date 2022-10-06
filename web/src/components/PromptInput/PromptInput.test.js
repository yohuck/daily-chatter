import { render } from '@redwoodjs/testing/web'

import PromptInput from './PromptInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PromptInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PromptInput />)
    }).not.toThrow()
  })
})

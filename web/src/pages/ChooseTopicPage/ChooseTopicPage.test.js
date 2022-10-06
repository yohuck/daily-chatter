import { render } from '@redwoodjs/testing/web'

import ChooseTopicPage from './ChooseTopicPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChooseTopicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChooseTopicPage />)
    }).not.toThrow()
  })
})

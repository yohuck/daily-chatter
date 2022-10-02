import { render } from '@redwoodjs/testing/web'

import Response from './Response'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Response', () => {
  it('renders successfully', () => {
    const response = {
      title: "My toxic trait",
      body: "My toxic trait is that I got bought coffee every day this week.",
      user: "Huck",
    }

    render(<Response comment={response} />)

    expect(screen.getByText(response.title)).toBeInTheDocument()
    expect(screen.getByText(response.body)).toBeInTheDocument()
    expect(screen.getByText(response.user)).toBeInTheDocument()
  })
})

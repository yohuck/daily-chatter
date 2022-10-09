import { Link, routes } from '@redwoodjs/router'

import Prompts from 'src/components/Prompt/Prompts'

export const QUERY = gql`
  query FindPrompts {
    prompts {
      id
      title
      body
      dispalyDate
      topicId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No prompts yet. '}
      <Link to={routes.newPrompt()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prompts }) => {
  return <Prompts prompts={prompts} />
}

import AllTopics from 'src/components/AllTopics'

export const QUERY = gql`
  query OnlyTopicsQuery {
    onlyTopics: topics {
      id
      title
      prompts {
        id
        title
        responses {
          upvotes
          supervote
        }
      }
    }
  }
`

export const Loading = () => (
  <div className="min-h-lg mt-36 grid place-items-center">
    <i className="fa-duotone fa-loader spin fa-6x p-1 text-emerald-500"></i>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ onlyTopics }) => {
  return onlyTopics.map((topic) => <AllTopics key={topic.id} topic={topic} />)
}

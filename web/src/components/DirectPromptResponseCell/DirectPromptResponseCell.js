import PromptInput from 'src/components/PromptInput'

export const QUERY = gql`
  query FindDirectPromptResponseQuery($id: Int!) {
    directResponse: prompt(id: $id) {
      id
      title
      body
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ directResponse }) => {
  console.log('directResponse console.log')
  console.log(directResponse)
  return <PromptInput prompt={directResponse} />
}

import PromptInput from '../PromptInput/PromptInput'

const LoopResponses = ({ filteredPrompts }) => {
  return filteredPrompts.map((prompt) => (
    <div key={prompt.id} className="z-20 relative flex justify-center">
      <PromptInput prompt={prompt} />
    </div>
  ))
}

export default LoopResponses

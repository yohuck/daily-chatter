import { MetaTags } from '@redwoodjs/web'

import GetResponseCell from 'src/components/ResponseCardsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main className="flex items-center justify-center">
        <GetResponseCell />
      </main>
    </>
  )
}

export default HomePage

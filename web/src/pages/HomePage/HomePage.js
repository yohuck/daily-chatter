import { MetaTags } from '@redwoodjs/web'

import GetResponseCell from 'src/components/ResponseCardsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Talking Cents Home page" />
      <main className="flex items-center justify-center flex-wrap">
        <GetResponseCell />
      </main>
    </>
  )
}

export default HomePage

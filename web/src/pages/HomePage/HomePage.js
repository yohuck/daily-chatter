import { MetaTags } from '@redwoodjs/web'

import HomePageCell from 'src/components/homePageCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main className="flex flex-col items-center justify-center">
        <HomePageCell />
      </main>
    </>
  )
}

export default HomePage

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main className="font-mono">
        <article className="">
          <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-indigo-200 p-7 font-semibold shadow-lg">
            <div className="shrink-0">R</div>
            <div className="text">
              <p className="text-xl font-medium">
                This is my thought right here
              </p>
              <p>Hello Friend</p>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default HomePage

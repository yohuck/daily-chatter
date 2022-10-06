import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Response from 'src/components/Response/Response'

const response = {
  title: 'Low Rise? High Rise? Rise Above',
  body: 'Let people wear whatever the heck they want who cares',
  user: 'Huck',
}
const response2 = {
  title: 'Bodies are different shapes',
  body: 'Wear what youre comfortable with',
  user: 'Leah',
}
const response3 = {
  title: 'Both arguments have holes',
  body: 'I literally do not care how high or low your jeans are but for the love of all that is hole-y can we quit with the pre-distressed jeans?',
  user: 'Lana',
}
const response4 = {
  title: 'We love a Jort king',
  body: 'From cutoff capris to daisy dukes, the true form for demin is jorts. Function, fashion, and free-knees!',
  user: 'Huck',
}

const response5 = {
  title: 'Friends in low places',
  body: 'I for one welcome the return of low rise and the first hip bones of the season',
  user: 'Atkins',
}

const ChooseTopicPage = () => {
  return (
    <>
      <MetaTags title="ChooseTopic" description="ChooseTopic page" />

      <ul>
        <li className="flex justify-center">
          <div className="card flex relative m-2 w-11/12 flex-col items-center justify-center rounded-lg bg-green-200 shadow lg:block">
            <div className="p2 flex  top z-10 w-min items-center gap-3 rounded-lg bg-sky-200 shadow lg:absolute 2xl:block">
              <p className="text-2xl font-extrabold">Health</p>
              <div className="flex w-11/12 justify-between">
                <i className="fa-duotone fa-user p-1 text-indigo-500"></i> 24
              </div>
              <div className="flex w-11/12 justify-between">
                <i className="fa-duotone fa-coin p-1 text-indigo-500"></i> 4200
              </div>
            </div>
            <h1 className="mb-3 mt-5 text-center text-2xl font-bold">
              Jeans: High Rise or Low?{' '}
            </h1>
            <div className="flex container justify-center">
              <article className="flex flex-wrap justify-center">
                <Response response={response} />
                <Response response={response2} />
                <Response response={response3} />
              </article>
            </div>
            <button className="p2 bottom-3 w-min rounded-lg bg-sky-200 shadow xl:absolute">
              <p className='font-bold'>Subscribe</p>
            </button>
          </div>
        </li>
        <li className="flex justify-center">
          <div className="card flex relative m-2 w-11/12 flex-col items-center justify-center rounded-lg bg-green-200 shadow lg:block">
            <div className="p2 top flex z-10 w-min rounded-lg bg-sky-200 shadow lg:absolute 2xl:block">
              <p className="text-2xl font-extrabold">Health</p>
              <div className="flex w-11/12 justify-between">
                <i className="fa-duotone fa-user p-1 text-indigo-500"></i> 24
              </div>
              <div className="flex w-11/12 justify-between">
                <i className="fa-duotone fa-coin p-1 text-indigo-500"></i> 4200
              </div>
            </div>
            <h1 className="mb-3 mt-5 text-center text-2xl font-bold">
              Jeans: High Rise or Low?{' '}
            </h1>
            <div className="flex container justify-center">
              <article className="flex flex-wrap justify-center">
                <Response response={response} />
                <Response response={response2} />
                <Response response={response3} />
              </article>
            </div>
            <button className="p2 bottom-3 w-min rounded-lg  bg-sky-200 shadow 2xl:absolute">
              <p className="font-bold">Subscribe</p>
            </button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default ChooseTopicPage

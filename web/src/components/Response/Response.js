const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Response = ({ response }) => {
  return (
    <div className=" m-2 w-96 rounded-lg bg-blue-100 p-8 shadow">
      <header className="center flex justify-between gap-5">
        <h2 className="break-words font-bold text-sky-700">{response.title}</h2>
        <div className="icons flex gap-2 bg-gray-300 p-3 rounded-md">
          <svg
            className="h-6 w-6 flex-none fill-red-500 stroke-gray-800 stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
          <svg
            className="h-6 w-6 flex-none fill-green-500 stroke-gray-800 stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
          <svg
            className="h-6 w-6 flex-none fill-yellow-500 stroke-gray-800 stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
        </div>
      </header>
      <p className="mt-2 text-sm">{response.body}</p>

      <div className="flex w-full justify-center">
        <div className=" m-2 flex flex items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-flag fa-2x p-1 text-gray-500"></i>
          </div>
        </div>
        <div className=" m-2 flex flex items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-do-not-enter fa-2x p-1 text-red-500"></i>
          </div>
        </div>
        <div className=" m-2 flex flex items-center rounded-lg bg-sky-100 p-2 shadow hover:bg-yellow-100 ">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-coin fa-2x p-1 text-emerald-500"></i>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Response

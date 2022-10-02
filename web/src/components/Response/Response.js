const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Response = ({ response }) => {
  return (
    <div className=" m-2 w-96 rounded-lg bg-sky-100 p-8 shadow">
      <header className="center flex justify-between gap-5">
        <h2 className="break-words font-bold text-sky-700">{response.title}</h2>
        <div className="icons flex gap-2">
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
    </div>
  )
}

export default Response

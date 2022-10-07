const Response = ({ response }) => {
  return (
    <div className="maxy relative m-2 flex flex-col justify-between rounded-lg bg-white p-8 shadow dark:bg-zinc-900 dark:border-slate-300">
      <div className="absolute bottom-0 left-0 m-1 rounded bg-emerald-200 px-2">
        E
      </div>
      <header className="center mb-2 flex justify-between gap-5">
        <h2 className="break-words font-bold">{response.title}</h2>
        <div className="icons mb-3 flex gap-2  border-black  p-3">
          <p>23</p>
          <i className="fa-duotone fa-sack-dollar p-1 text-emerald-500"></i>
          <p>3</p>
          <i className="fa-duotone fa-sack-dollar p-1 text-indigo-500"></i>
        </div>
      </header>
      <p className="mt-2 text-sm">{response.body}</p>

      <div className=" mt-3 flex w-full justify-center">
        <button className="dark:hover:bg-neutral-800 bg-white-100 m-2 flex items-center rounded-lg p-2 shadow transition-shadow hover:bg-yellow-100 hover:ring hover:ring-yellow-500 focus:bg-yellow-100 focus:ring focus:ring-yellow-500">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-trash-can fa-2x p-1 text-gray-500"></i>
          </div>
        </button>
        <button className="m-2 flex items-center rounded-lg dark:hover:bg-neutral-800  p-2 shadow transition-shadow hover:bg-red-100 hover:ring hover:ring-red-500 focus:bg-red-100 focus:ring focus:ring-red-500">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-do-not-enter fa-2x p-1 text-red-500"></i>
          </div>
        </button>
        <button className="dark:hover:bg-neutral-800 m-2 flex items-center rounded-lg  p-2 shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-coin fa-2x p-1 text-emerald-500"></i>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Response

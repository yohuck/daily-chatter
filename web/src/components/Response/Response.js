const Response = ({ response }) => {
  return (
    <div className="relative m-2 flex w-96 flex-col justify-between rounded-lg bg-blue-100 p-8 shadow">
      <div className="absolute bottom-0 left-0 m-1 rounded bg-indigo-200 px-2">
        E
      </div>
      <header className="center mb-2 flex justify-between gap-5">
        <h2 className="break-words font-bold text-sky-700">{response.title}</h2>
        <div className="icons mb-3 flex gap-2 rounded-md border-2 border-black bg-white p-3 shadow">
          <p>23</p>
          <i className="fa-duotone fa-sack-dollar p-1 text-emerald-500"></i>
          <p>3</p>
          <i className="fa-duotone fa-sack-dollar p-1 text-indigo-500"></i>
        </div>
      </header>
      <p className="mt-2 text-sm">{response.body}</p>

      <div className=" mt-3 flex w-full justify-center">
        <button className=" m-2 flex items-center rounded-lg bg-white p-2 shadow transition-shadow hover:bg-yellow-100 hover:ring hover:ring-yellow-500 focus:bg-yellow-100 focus:ring focus:ring-yellow-500">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-trash-can fa-2x p-1 text-gray-500"></i>
          </div>
        </button>
        <button className="m-2 flex items-center rounded-lg bg-white p-2 shadow transition-shadow hover:bg-red-100 hover:ring hover:ring-red-500 focus:bg-red-100 focus:ring focus:ring-red-500">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-do-not-enter fa-2x p-1 text-red-500"></i>
          </div>
        </button>
        <button className="m-2 flex items-center rounded-lg bg-white p-2 shadow transition-shadow hover:bg-green-100 hover:ring hover:ring-green-500 focus:bg-green-100 focus:ring focus:ring-green-500">
          <div className=" flex flex-col">
            {/* <h1 className="m-2 text-4xl font-black text-black">Pennywrite</h1> */}
            <i className="fa-duotone fa-coin fa-2x p-1 text-orange-700"></i>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Response

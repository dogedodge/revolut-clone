const HomePage = () => {
  return (
    <div className="bg-blue-500 h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <div className="text-gray-500 text-sm">6:10</div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-500 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-500 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              className="block w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gray-800">Main · GBP</div>
            <div className="text-blue-500 font-bold text-2xl">£105.18</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-600">Accounts</div>
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Add money
            </button>
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Exchange
            </button>
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Move
            </button>
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              More
            </button>
          </div>
          <div className="bg-blue-100 rounded-lg p-4">
            <p className="text-blue-500 font-bold">Get up to £200!</p>
            <p className="text-gray-600">
              Refer friends by 30 July and get up to £200. T&Cs apply
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
                <div className="text-gray-500 text-sm">O</div>
              </div>
              <div className="text-gray-800">OSEYO</div>
            </div>
            <div className="text-red-500 font-bold">-£9.50</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
                <div className="text-gray-500 text-sm">$</div>
              </div>
              <div className="text-gray-800">LEON Hammersmith</div>
            </div>
            <div className="text-red-500 font-bold">-£7.29</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

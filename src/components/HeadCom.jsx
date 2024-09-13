function Headcom() {
    return (
        <div className="bg-gray-700 text-white w-[90%] sm:w-[80%] lg:w-[60%] mx-auto flex justify-between items-center py-4 px-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">
                Expense <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-purple-800">Tracker</span>
            </h1>
            <div>
                <ul className="flex space-x-6 text-base sm:text-lg font-medium">
                    <li className="hover:bg-pink-500 hover:text-white transition-colors duration-300 cursor-pointer px-4 py-2 rounded">Home</li>
                    <li className="hover:bg-pink-500 hover:text-white transition-colors duration-300 cursor-pointer px-4 py-2 rounded">About</li>
                </ul>
            </div>
        </div>
    );
}

export default Headcom;

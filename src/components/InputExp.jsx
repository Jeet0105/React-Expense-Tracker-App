import { useState,useEffect } from "react";

function InputExp() {

    const [name,setName] = useState("");
    const [amt,setAmt] = useState(0); 
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const storedExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];
        setIndex(storedExpenses.length + 1);
    }, []);

    const addExpense = () => {
        const newExpense = { index, name, amt };
        const storedExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];
        const updatedExpenses = [...storedExpenses, newExpense];
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setIndex(index + 1);
        setAmt(0);
        setName("");
        location.reload();
    };
    return (
        <div className="bg-gray-700 text-white w-[90%] sm:w-[80%] lg:w-[60%] mx-auto py-6 px-8 rounded-lg shadow-lg mt-10">
            <div className="mb-4">
                <label className="block mb-2 text-lg font-medium">
                    Enter your Expense Name:
                </label>
                <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Expense name"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lg font-medium">
                    Enter Amount:
                </label>
                <input
                    type="number"
                    className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Amount"
                    onChange={(e)=>setAmt(e.target.value)}
                    value={amt}
                />
            </div>
            <button onClick={addExpense} className="bg-pink-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-pink-700 transition-colors duration-300">
                Add Expense
            </button>
        </div>
    );
}

export default InputExp;
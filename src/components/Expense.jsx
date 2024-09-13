import { useState, useEffect } from "react";

function Expense() {
    const [expenses, setExpenses] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);
    const [editableIndex, setEditableIndex] = useState(-1); // For tracking which item is editable
    const [editExpense, setEditExpense] = useState({ name: "", amt: "" }); // For editing values

    useEffect(() => {
        const storedExpenses = localStorage.getItem('expenses') 
            ? JSON.parse(localStorage.getItem('expenses')) 
            : [];
        setExpenses(storedExpenses);
        const total = storedExpenses.reduce((acc, expense) => acc + parseFloat(expense.amt), 0);
        setTotalExpense(total);
    }, []);

    const handleDelete = (index) => {
        const updatedExpenses = expenses.filter((_, idx) => idx !== index);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);
        const total = updatedExpenses.reduce((acc, expense) => acc + parseFloat(expense.amt), 0);
        setTotalExpense(total);
    };

    const handleEdit = (index) => {
        setEditableIndex(index);
        setEditExpense(expenses[index]); // Load the current values to be edited
    };

    const handleSaveEdit = (index) => {
        const updatedExpenses = expenses.map((expense, idx) =>
            idx === index ? editExpense : expense
        );
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);
        setEditableIndex(-1); // Exit edit mode
        const total = updatedExpenses.reduce((acc, expense) => acc + parseFloat(expense.amt), 0);
        setTotalExpense(total);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditExpense((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-gray-700 text-white w-[90%] sm:w-[80%] lg:w-[60%] mx-auto py-6 px-8 rounded-lg shadow-lg mt-10">
            <h1 className="text-2xl font-semibold text-center mb-6">Expenses</h1>
            <div className="space-y-4">
                {expenses.length > 0 ? (
                    expenses.map((expense, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-800 py-4 px-6 rounded-lg"
                        >
                            {editableIndex === index ? (
                                <div className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={editExpense.name}
                                        onChange={handleInputChange}
                                        className="bg-gray-600 px-2 py-1 rounded"
                                    />
                                    <input
                                        type="text"
                                        name="amt"
                                        value={editExpense.amt}
                                        onChange={handleInputChange}
                                        className="bg-gray-600 px-2 py-1 rounded"
                                    />
                                    <button
                                        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                                        onClick={() => handleSaveEdit(index)}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="text-lg font-medium">{expense.name}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-lg font-semibold">${expense.amt}</p>
                                        <button
                                            className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300"
                                            onClick={() => handleEdit(index)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg">No expenses recorded yet.</p>
                )}
            </div>
            <div className="text-center mt-4">
                <p className="text-lg">Total Expense: ${totalExpense}</p>
            </div>
        </div>
    );
}

export default Expense;
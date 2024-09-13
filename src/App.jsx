import Expense from "./components/Expense"
import Headcom from "./components/headcom"
import InputExp from "./components/InputExp"

function App() {

  return (
    <div className="bg-black h-screen">
      <Headcom />
      <InputExp />
      <Expense />
    </div>
  )
}

export default App

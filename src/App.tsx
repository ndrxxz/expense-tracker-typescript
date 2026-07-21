import { Hero, Navbar } from "@/components/layout";
import { Expenses } from "@/components/expenses";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col gap-10">
      <Navbar />
      <Hero />
      <Expenses />
    </div>
  )
}

export default App
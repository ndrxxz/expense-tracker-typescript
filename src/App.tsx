import { Hero, Navbar } from "@/components/layout";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col gap-10">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
 
import { Zap } from "lucide-react"
import FeatureCard from "./components/FeatureCard"
import Header from "./components/Header"
 

function App() {
   

  return (
    <>
      <Header/>
      <FeatureCard
            icon={<Zap className="h-10 w-10 mb-4 text-primary" />}
            title="Lightning Fast"
            description="Process tasks at unprecedented speeds, saving you valuable time."
          />
    </>
  )
}

export default App

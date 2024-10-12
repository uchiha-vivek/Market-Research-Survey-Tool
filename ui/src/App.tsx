import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SurveyFormPage from "./pages/SurveyForm"
import SurveyGeneratorPage from "./pages/SurveyGenerator"
 

function App() {
   

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/survey" element={<SurveyFormPage/>}/>
        <Route path="/survey-generator" element={<SurveyGeneratorPage/>}/>
      </Routes>
    </>
  )
}

export default App
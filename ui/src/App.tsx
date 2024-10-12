import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SurveyFormPage from "./pages/SurveyForm"
import SurveyGeneratorPage from "./pages/SurveyGenerator"
import LoginFormPage from "./pages/Login"
import RegisterFormPage from "./pages/Register"
import AuthFormPage from "./pages/AuthForm"
import PrivateRoute from "./pages/protected-route"
 

function App() {
   

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/survey" element={<PrivateRoute element={<SurveyFormPage />} />} />
        <Route path="/survey-generator" element={<PrivateRoute element={<SurveyGeneratorPage/>} />} />
        <Route path="/login" element={<LoginFormPage/>}/>
        <Route path="/register" element={<RegisterFormPage/>}/>
        <Route path="/auth" element={<AuthFormPage/>}/>
      </Routes>
    </>
  )
}

export default App
import SurveyGenerator from "@/api-components/survey";
import Header from "@/components/Header";



const SurveyGeneratorPage= () => {
    return (
        <>
        <div className="flex flex-col min-h-screen" >
            <Header/>
         <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4" >
            <SurveyGenerator/>
         </main>
        </div>
        
        </>
    )
}
export default SurveyGeneratorPage
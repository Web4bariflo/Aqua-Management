import Overview from "./components/Ponds/Overview";
import FarmEconomics from "./components/Farm/FarmEconomics";
import PondsAnalytics from "./components/Ponds/PondsAnalytics";
import EachPondAnalytics from "./components/Ponds/EachPondAnalytics";
import Footer from "./components/Footer";
const App =()=>{

  return(
    <>
   <Overview/>
    <FarmEconomics/>
    <PondsAnalytics/>
    <EachPondAnalytics/>
    <Footer/>
    </>
  )
}
export default App;

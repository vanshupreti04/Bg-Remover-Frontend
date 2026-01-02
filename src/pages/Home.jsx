import BgRemoveStep from "../components/BgRemoveSteps";
import Header from "../components/Header"
import BgSlider from "../components/BgSlider";
import Pricing from "../components/Pricing";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header/>
            <BgRemoveStep/>
            <BgSlider/>
            <Pricing/>
        </div>
    )
}
export default Home;
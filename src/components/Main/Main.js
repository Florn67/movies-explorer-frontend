import "./Main.css"
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import Portfolio from "../Portfolio/Portfolio";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
function Main() {
  return (
    <main className="main">
      <Header type="main"/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </main>
  );
}

export default Main;
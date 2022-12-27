import ContactMe from "../components/contactMe/ContactMe";
import About from "../components/mainContent/aboutSection/About";
import Products from "../components/mainContent/dualSection/Products";
import MainContent from "../components/mainContent/sectionHero/MainContent";
import ShopMain from "../components/mainContent/carouselSection/ShopMain";

const Dashboard = () => {
  return (
    <main>
      <MainContent />
      <ShopMain />
      <Products />
      <About />
      <ContactMe/>
    </main>
  );
};

export default Dashboard;

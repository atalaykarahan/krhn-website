import ContactMe from "../components/contactMe/ContactMe";
import About from "../components/mainContent/aboutSection/About";
import Products from "../components/mainContent/productsSection/Products";
import MainContent from "../components/mainContent/sectionHero/MainContent";
import ShopMain from "../components/mainContent/shopSection/ShopMain";

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

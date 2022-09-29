// import About from "../components/mainContent/aboutSection/About";
import Products from "../components/mainContent/productsSection/Products";
import MainContent from "../components/mainContent/sectionHero/MainContent";
import Shop from "../components/mainContent/shopSection/Shop";

const Dashboard = () => {
  return (
    <main>
      {/* main content kısmında hiç bir sorun yok buraya sonradan ayar çekersin önceliğin shop olmalı */}
      <MainContent />
      <Shop />
      <Products />
      {/* <About /> */}
    </main>
  );
};

export default Dashboard;

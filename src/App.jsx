import { useState } from "react";
import Header from "./section/header/Header";
import ChairPricingSection from "./section/mainContent/ChairPricingSection";
import WhyChooseUs from "./section/mainContent/WhyChooseUs";
import ModernDesign from "./section/mainContent/ModernDesign";
import Blog from "./section/mainContent/Blog";
import Footer from "./section/footer/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="pt-16">
      <Header />
      {/* MainContent */}
      <main className="bg-[#EFF2F1] p-[5%] flex flex-col gap-6  mx-auto">
        <ChairPricingSection />
        <WhyChooseUs/>
        <ModernDesign/>

        {/*  */}
        <Blog/>
        {/*  */}
      </main>
        <Footer/>
    </div>
  );
}

export default App;

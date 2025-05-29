import { useState } from "react";
import Header from "./section/header/Header";
import ChairPricingSection from "./section/mainContent/ChairPricingSection";
import WhyChooseUs from "./section/mainContent/WhyChooseUs";
import ModernDesign from "./section/mainContent/ModernDesign";
import Blog from "./section/mainContent/Blog";
import Footer from "./section/footer/Footer";
import Testimonial from "./section/mainContent/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full pt-16">
      <Header />
      {/* MainContent */}
      <div className="bg-[#EFF2F1] flex flex-col gap-6  mx-auto">
        <main className="mx-auto w-3/4">
          <ChairPricingSection />
          <WhyChooseUs />
          <ModernDesign />
          <Testimonial />
          {/*  */}
          <Blog />
          {/*  */}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import MainCarousel from "../../components/Homecarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";

function HomePage() {
  return (
    <div>
      <MainCarousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's kurta"}/>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Pant"}/>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Girl's Ghagras"}/>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Women's Saree"}/>
      </div>
    </div>
  );
}

export default HomePage;

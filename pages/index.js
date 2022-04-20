import React from 'react';
import FirstNav from "../components/navbar/InitialNav";
import SecondaryNav from "../components/navbar/SecondaryNav";
import FirstSection from "../components/section_portfolio_allocation/FirstSection";
import TableSection from "../components/section_table/TableSection";
import CardsSection from "../components/section_cards/CardsSection";
import Pagination from "../components/pagination/Pagination";
import Test from "../helper/Test";



const Index = () => {
  return (
    <div>
      <FirstNav />
      <SecondaryNav />
      <FirstSection />
      <TableSection />
      <CardsSection />
      {/*<Pagination />*/}
      {/*<Test />*/}
    </div>
  );
};

export default Index;

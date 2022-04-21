import React from 'react';
import FirstNav from "../components/navbar/InitialNav";
import SecondaryNav from "../components/navbar/SecondaryNav";
import FirstSection from "../components/section_portfolio_allocation/FirstSection";
import TableSection from "../components/section_table/TableSection";
import CardsSection from "../components/section_cards/CardsSection";


const Index = () => {
  return (
    <div>
      <FirstNav />
      <SecondaryNav />
      <FirstSection />
      <TableSection />
      <CardsSection />
    </div>
  );
};

export default Index;

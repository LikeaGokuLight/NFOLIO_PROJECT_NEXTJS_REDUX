import React from 'react';
import FirstNav from "../components/navbar/InitialNav";
import SecondaryNav from "../components/navbar/SecondaryNav";
import FirstSection from "../components/section_portfolio_allocation/FirstSection";
import TableSection from "../components/section_table/TableSection";
import CardsSection from "../components/section_cards/CardsSection";
import {ThemeProvider} from "@mui/system";
import Theme from "../helper/Theme";

const Index = () => {

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <FirstNav />
        <SecondaryNav />
        <FirstSection />
        <TableSection />
        <CardsSection />
      </ThemeProvider>
    </div>
  );
};

export default Index;

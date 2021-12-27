import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { ProductList } from "./components/productList/ProductList";
import { Toggle } from "./components/toggle/Toggle";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./context";
import ButtonAppBar from "./components/appBar/AppBar";
import { useTranslation } from "react-i18next";
import { Dropdown } from "./components/dropdown/Dropdown";




const App = () => {
  const { t } = useTranslation();
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div style={{ backgroundColor: darkMode ? "#222" : "white",  color: darkMode && "white" }}> 
    <ButtonAppBar about={ t("about") }  projects={t("projects")} contact={t("contact")} />

    
    <Dropdown langWord = { t("language") }/>
    <Toggle  />
    <Intro intro_text1 = { t("intro_text1") } intro_item1={ t("intro_item1") } intro_item5={ t("intro_item5") } intro_text2={ t("intro_text2") } download_button={ t("download_button") } /> 
    <About aboutTitle={ t("aboutTitle") } aboutText1={ t("aboutText1") } aboutText2={ t("aboutText2")} awardTitle={ t("awardTitle")} awardText={ t("awardText") } />
    <ProductList mymainprojectstext={ t("mymainprojectstext") } mymainprojectsTitle={ t("mymainprojectsTitle")}/>
    <Contact  wannaReachMe={ t("wannaReachMe")} projectInMind={ t("projectInMind") } alwaysAvailable={ t("alwaysAvailable")} placeholderName={ t("placeholderName")} placeholderSubject={ t("placeholderSubject") }  placeholderEmail={ t("placeholderEmail")} placeholderMessage={ t("placeholderMessage")} labelSubmit={ t("labelSubmit")}  thanks={ t("thanks")} />
  </div>
  );
};

export default App;
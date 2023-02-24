import data from "./data.json";
import Jobs from "./components/Jobs";
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Testimonial from "./components/Testimonials/Testimonial";
import AboutUs from "./components/AboutUs/AboutUs";
import linkIcon from "./images/link.png"
import Footer from "./components/Footer/Footer";



function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  // const setSearchKeyword = (data) => {
  //   setfilterKeywords(data);
  // };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      
      <div className="header">
        <h1 className="career">Career Connector <img style={{height: "45px"}} src={linkIcon} alt=""></img></h1>
        
      </div>

      <AboutUs/>
      
      {/* <Search setSearchKeyword={setSearchKeyword} /> */}

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />

      <Testimonial/>

      <Footer/>
    </div>
  );
}

export default App;

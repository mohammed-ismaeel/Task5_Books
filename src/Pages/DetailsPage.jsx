import React from "react";
import Details from "../components/Details/Details";
import { ThemeContext } from "./../components/context/ThemeContext";
import { useContext } from "react";

const DetailsPage = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`detail-page ${theme}`}>
      <div className="container dark:bg-black">
        <Details onClick={onClick} />
        </div>          
      </div>
    </>
  );
};

export default DetailsPage;

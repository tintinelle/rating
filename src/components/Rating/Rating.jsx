import style from "./styles.module.scss";
// import { useState, useEffect } from "react";
// import axios from "axios";
import CompaniesData from "../../constants/Rating/CompaniesData";
import Row from "./Row/Row";
import Button from "../Button/Button";
import useWindowDimensions from "../../services/useWindowDimensions";
import { useState, useEffect } from "react";

const Rating = () => {
  const { width } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState("17.5vw");
  useEffect(() => {
    if (width < 1581) {
      setButtonWidth("35%");
    }
    if (width < 951) {
      setButtonWidth("50%");
    }
    if (width < 651) {
      setButtonWidth("70%");
    }
  }, [width]);

  // react Hook For State Handler
  // const [data, setData] = useState([]);

  // Fetch Function
  // useEffect(() => {
  //   fetch("../../constants/Rating/CompaniesData.json")
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then(function (data) {
  //       // store Data in State Data Variable
  //       setData(data);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios.get("../../constants/Rating/CompaniesData.json").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <section className={style["rating"]}>
      <div className={style["rating__rows"]}>
        {/* {data
          ? data.map((item) => {
              return <Row item={item} key={item.id} />;
            })
          : " "} */}
        {CompaniesData.map((item, index) => {
          return <Row item={item} key={item.id} number={index + 1} />;
        })}
      </div>
      <Button
        buttonClass="button_blue"
        text="Добавить компанию в рейтинг"
        width={buttonWidth}
        // handleClick={displayModalForm}
      />
    </section>
  );
};

export default Rating;

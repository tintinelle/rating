import style from "./styles.module.scss";
import axios from "axios";
import Row from "./Row/Row";
import Button from "../Button/Button";
import useWindowDimensions from "../../services/useWindowDimensions";
import { useState, useEffect } from "react";

const Rating = ({
  handleOpenPopUpAdd,
  handleOpenPopUpReview,
  handleOpenPopUpBuy,
}) => {
  const [data, setData] = useState([]);
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

  const handleLikeDislike = (action, companyId) => {
    const updatedCompanies = data.map((company) => {
      if (company.id === companyId) {
        if (action === "like") {
          return {
            ...company,
            positive: company.positive + 1,
          };
        }
        if (action === "dislike") {
          return {
            ...company,
            negative: company.negative + 1,
          };
        }
      }
      return company;
    });
    setData(updatedCompanies);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("CompaniesData.json");
      setData(result.data.companies);
    };
    fetchData();
  }, []);

  return (
    <section className={style["rating"]}>
      <div className={style["rating__rows"]}>
        {data
          ? data.map((item, index) => {
              return (
                <Row
                  item={item}
                  key={item.id}
                  number={index + 1}
                  handleOpenPopUpReview={handleOpenPopUpReview}
                  handleOpenPopUpBuy={handleOpenPopUpBuy}
                  handleLikeDislike={handleLikeDislike}
                />
              );
            })
          : " "}
      </div>
      <Button
        buttonClass="button_blue"
        text="Добавить компанию в рейтинг"
        width={buttonWidth}
        handleClick={handleOpenPopUpAdd}
      />
    </section>
  );
};

export default Rating;

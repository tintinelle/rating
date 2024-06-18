import style from "./styles.module.scss";
import Button from "../Button/Button";
import useWindowDimensions from "../../services/useWindowDimensions";
import { useState, useEffect } from "react";

const SearchBanner = () => {
  const { width } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState("50%");
  useEffect(() => {
    if (width < 1301) setButtonWidth("75%");
    if (width < 901) setButtonWidth("73%");
  }, [width]);

  return (
    <section className={style["banner"]}>
      <h2 className={style["banner__title"]}>
        Ищете удобного поставщика трафика на банкротство?
      </h2>
      <div className={style["banner__wrapper"]}>
        <p className={style["banner__description"]}>
          Укажи критерии, а мы подберем маркетолога, который готов работать на
          ваших условиях!
        </p>
        <Button
          buttonClass="button_blue"
          text="Подобрать маркетолога по банкротству"
          width={buttonWidth}
          // handleClick={displayModalForm}
        />
      </div>
    </section>
  );
};

export default SearchBanner;

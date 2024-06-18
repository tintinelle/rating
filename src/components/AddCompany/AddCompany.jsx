import style from "./styles.module.scss";
import Button from "../Button/Button";
import useWindowDimensions from "../../services/useWindowDimensions";
import { useState, useEffect } from "react";

const AddCompany = () => {
  const { width } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState("26.25%");
  useEffect(() => {
    if (width < 1001) setButtonWidth("63%");
  }, [width]);

  return (
    <section className={style["banner"]}>
      <h3 className={style["banner__title"]}>
        Как добавить компанию в рейтинг
      </h3>
      <p className={style["banner__info"]}>
        Для этого вам следует заполнить форму
      </p>
      <Button
        buttonClass="button_blue"
        text="Добавить компанию в рейтинг"
        width={buttonWidth}
        // handleClick={displayModalForm}
      />
    </section>
  );
};

export default AddCompany;

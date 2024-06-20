import Header from "../components/Header/Header";
import BannerProviders from "../components/BannerProviders/BannerProviders";
import WhoToAdd from "../components/WhoToAdd/WhoToAdd";
import WhatAddvertisement from "../components/WhatAddvertisement/WhatAddvertisement";
import DontAgreeReview from "../components/DontAgreeReview/DontAgreeReview";
import DontAgreeRating from "../components/DontAgreeRating/DontAgreeRating";
import RatingProfit from "../components/RatingProfit/RatingProfit";
import AddCompany from "../components/AddCompany/AddCompany";
import FooterForm from "../components/FooterForm/FooterForm";
import PopUpBuy from "../components/PopUps/PopUpBuy";
import PopUpAdd from "../components/PopUps/PopUpAdd";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function ProvidersPage() {
  const [showPopUpAdd, setShowPopUpAdd] = useState(false);
  const [showPopUpBuy, setShowPopUpBuy] = useState(false);

  const handleOpenPopUpAdd = () => {
    setTimeout(() => {
      setShowPopUpAdd(true);
    }, 0);
  };

  const handleOpenPopUpBuy = () => {
    setTimeout(() => {
      setShowPopUpBuy(true);
    }, 0);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Добавить поставщика</title>
        <meta
          name="description"
          content="Добавить поставщика лидов на банкротство в рейтинг. Как продать лиды на банкротство."
        />
        <meta name="keywords" content="продажа лидов на банкротство" />
      </Helmet>
      {showPopUpAdd && <PopUpAdd onClose={() => setShowPopUpAdd(false)} />}
      {showPopUpBuy && (
        <PopUpBuy onClose={() => setShowPopUpBuy(!showPopUpBuy)} />
      )}
      <Header transparent={true} />
      <BannerProviders />
      <WhoToAdd />
      <WhatAddvertisement />
      <DontAgreeReview />
      <DontAgreeRating />
      <RatingProfit />
      <AddCompany handleOpenPopUpAdd={handleOpenPopUpAdd} />
      <FooterForm handleOpenPopUpBuy={handleOpenPopUpBuy} />
    </>
  );
}

export default ProvidersPage;

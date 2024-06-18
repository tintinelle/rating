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
import PopUpReview from "../components/PopUps/PopUpReview";
import PopUpMark from "../components/PopUps/PopUpMark";
import PopUpAdd from "../components/PopUps/PopUpAdd";
import PopUpChoose from "../components/PopUps/PopUpChoose";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ProvidersPage() {
  const [showPopUpReview, setShowPopUpReview] = useState(false);
  const [showPopUpMark, setShowPopUpMark] = useState(false);
  const [showPopUpAdd, setShowPopUpAdd] = useState(false);
  const [showPopUpChoose, setShowPopUpChoose] = useState(false);
  const [showPopUpBuy, setShowPopUpBuy] = useState(false);

  const handleOpenPopUpBuy = () => {
    setShowPopUpBuy(true);
  };

  // console.log(showPopUpBuy);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {showPopUpReview && (
        <PopUpReview onClose={() => setShowPopUpReview(false)} />
      )}
      {showPopUpMark && <PopUpMark onClose={() => setShowPopUpMark(false)} />}
      {showPopUpAdd && <PopUpAdd onClose={() => setShowPopUpAdd(false)} />}
      {showPopUpChoose && (
        <PopUpChoose onClose={() => setShowPopUpChoose(false)} />
      )}
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
      <AddCompany />
      <FooterForm />
    </>
  );
}

export default ProvidersPage;

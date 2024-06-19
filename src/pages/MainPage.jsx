import Header from "../components/Header/Header";
import BannerMain from "../components/BannerMain/BannerMain";
import Rating from "../components/Rating/Rating";
import SearchBanner from "../components/SearchBanner/SearchBanner";
import WhyToBuy from "../components/WhyToBuy/WhyToBuy";
import WhereToBuy from "../components/WhereToBuy/WhereToBuy";
import ChooseBanner from "../components/ChooseBanner/ChooseBanner";
import CheckBanner from "../components/CheckBanner/CheckBanner";
import ReviewsBanner from "../components/ReviewsBanner/ReviewsBanner";
import Regions from "../components/Regions/Regions";
import Footer from "../components/Footer/Footer";
import PopUpBuy from "../components/PopUps/PopUpBuy";
import PopUpAdd from "../components/PopUps/PopUpAdd";
import PopUpChoose from "../components/PopUps/PopUpChoose";
import PopUpReview from "../components/PopUps/PopUpReview";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MainPage() {
  const [showPopUpAdd, setShowPopUpAdd] = useState(false);
  const [showPopUpChoose, setShowPopUpChoose] = useState(false);
  const [showPopUpBuy, setShowPopUpBuy] = useState(false);
  const [showPopUpReview, setShowPopUpReview] = useState(false);

  const handleOpenPopUpBuy = () => {
    setTimeout(() => {
      setShowPopUpBuy(true);
    }, 0);
  };

  const handleOpenPopUpAdd = () => {
    setTimeout(() => {
      setShowPopUpAdd(true);
    }, 0);
  };

  const handleOpenPopUpChoose = () => {
    setTimeout(() => {
      setShowPopUpChoose(true);
    }, 0);
  };

  const handleOpenPopUpReview = () => {
    setTimeout(() => {
      setShowPopUpReview(true);
    }, 0);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {showPopUpAdd && <PopUpAdd onClose={() => setShowPopUpAdd(false)} />}
      {showPopUpChoose && (
        <PopUpChoose onClose={() => setShowPopUpChoose(false)} />
      )}
      {showPopUpBuy && (
        <PopUpBuy onClose={() => setShowPopUpBuy(!showPopUpBuy)} />
      )}
      {showPopUpReview && (
        <PopUpReview onClose={() => setShowPopUpReview(!showPopUpReview)} />
      )}
      <Header />
      <BannerMain handleOpenPopUpBuy={handleOpenPopUpBuy} />
      <Rating
        handleOpenPopUpAdd={handleOpenPopUpAdd}
        handleOpenPopUpReview={handleOpenPopUpReview}
        handleOpenPopUpBuy={handleOpenPopUpBuy}
      />
      <SearchBanner handleOpenPopUpChoose={handleOpenPopUpChoose} />
      <WhyToBuy />
      <WhereToBuy />
      <CheckBanner />
      <ChooseBanner />
      <ReviewsBanner />
      <Regions />
      <Footer handleOpenPopUpBuy={handleOpenPopUpBuy} />
    </>
  );
}

export default MainPage;

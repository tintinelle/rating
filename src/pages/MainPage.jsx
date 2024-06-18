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
import PopUpReview from "../components/PopUps/PopUpReview";
import PopUpMark from "../components/PopUps/PopUpMark";
import PopUpAdd from "../components/PopUps/PopUpAdd";
import PopUpChoose from "../components/PopUps/PopUpChoose";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MainPage() {
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
      <Header />
      <BannerMain handleOpenPopUpBuy={handleOpenPopUpBuy} />
      <Rating />
      <SearchBanner />
      <WhyToBuy />
      <WhereToBuy />
      <CheckBanner />
      <ChooseBanner />
      <ReviewsBanner />
      <Regions />
      <Footer />
    </>
  );
}

export default MainPage;

import Header from "../components/Header/Header";
import BannerAbout from "../components/BannerAbout/BannerAbout";
import WhyRating from "../components/WhyRating/WhyRating";
import HowToAdd from "../components/HowToAdd/HowToAdd";
import Estimation from "../components/Estimation/Estimation";
import Formula from "../components/Formula/Formula";
import QuestionBanner from "../components/QuestionBanner/QuestionBanner";
import Advertisement from "../components/Advertisement/Advertisement";
import WhereContacts from "../components/WhereContacts/WhereContacts";
import NotFullRating from "../components/NotFullRating/NotFullRating";
import SearchBanner from "../components/SearchBanner/SearchBanner";
import Footer from "../components/Footer/Footer";
import PopUpBuy from "../components/PopUps/PopUpBuy";
import PopUpChoose from "../components/PopUps/PopUpChoose";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function AboutPage() {
  const [showPopUpChoose, setShowPopUpChoose] = useState(false);
  const [showPopUpBuy, setShowPopUpBuy] = useState(false);

  const handleOpenPopUpChoose = () => {
    setTimeout(() => {
      setShowPopUpChoose(true);
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
        <title>О рейтинге</title>
        <meta
          name="description"
          content={
            "Рейтинг лидов на банкротство. У нас вы легко найдете поставщика лидов на банкротство, а также узнаете, кто продает самые качественные лиды БФЛ"
          }
        />
        <meta
          name="keywords"
          content="поставщик лидов на банкротство, лидогенератор по банкротству, маркетолог по банкротству"
        />
      </Helmet>
      {showPopUpChoose && (
        <PopUpChoose onClose={() => setShowPopUpChoose(!showPopUpChoose)} />
      )}
      {showPopUpBuy && (
        <PopUpBuy onClose={() => setShowPopUpBuy(!showPopUpBuy)} />
      )}
      <Header transparent={true} />
      <BannerAbout />
      <WhyRating />
      <HowToAdd />
      <Estimation />
      <Formula />
      <QuestionBanner />
      <Advertisement />
      <WhereContacts />
      <NotFullRating />
      <SearchBanner handleOpenPopUpChoose={handleOpenPopUpChoose} />
      <Footer handleOpenPopUpBuy={handleOpenPopUpBuy} />
    </>
  );
}

export default AboutPage;

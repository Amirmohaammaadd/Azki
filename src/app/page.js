import AccidentContent from "./_components/accident";
import AzkiCompany from "./_components/azkiCstmrCmpny";
import BuyAzki from "./_components/butAzki";
import Footer from "./_components/footer";
import HeroContent from "./_components/hero";
import InsuranceType from "./_components/insuranceType";
import Navbar from "./_components/navbar";
import OnlineBuy from "./_components/onLineBuy";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroContent />
      <OnlineBuy />
      <BuyAzki />
      <AccidentContent />
      <AzkiCompany />
      <InsuranceType />
      <Footer />
    </>
  );
}

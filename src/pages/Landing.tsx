import Navbar from "../components/landing/Navbar";
import Header from "../components/landing/Header";
import EfundersWorkFlow from "../components/landing/EfundersWorkFlow";
import Commission from "../components/landing/Commission";
import People from "../assets/people.png";
import OrderReceived from "../assets/order-received.png";
import CheeringPeople from "../assets/cheering-people.png";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <EfundersWorkFlow />
      <Commission
        title1="EARN 30% COMMISSION"
        title2="ON ALL SALES!"
        img={People}
        width="554px"
        height="518px"
        subtitle="PLUS DONATIONS FROM YOUR SUPPORTERS"
        desc="Welcome to our studio! We employ people who have passion for design and marketing. It’s a perfect combination of professionalism and creative individual approach to every client or project."
      />
      <Commission
        title1="NO DOOR TO DOOR SELLING"
        title2="OR DELIVERIES"
        img={OrderReceived}
        width="554px"
        height="518px"
        subtitle="SHARE YOUR FUNDRAISER AND WE TAKE CARE OF THE REST!"
        desc="Welcome to our studio! We employ people who have passion for 
design and marketing. It’s a perfect combination of professionalism 
and creative individual approach to every client or project."
      />
      <Commission
        title1="FUNDRAISING FUN!"
        img={CheeringPeople}
        width="554px"
        height="518px"
        subtitle="WIN ADDITIONAL PRIZES WHEN YOU REACH YOUR FUNDRAISING MILESTONES"
        desc="Welcome to our studio! We employ people who have passion for
design and marketing. It’s a perfect combination of professionalism
and creative individual approach to every client or project."
        bg="bg-lightgreen"
        reverse={true}
      />
    </>
  );
}

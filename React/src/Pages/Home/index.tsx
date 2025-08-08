import Carousel from "../../Components/carousel";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import Subtitle from "../../Components/Subtitle";
import Companies from "../../Components/TrustedCompany";
import { images } from "../../Types/images";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { PiHeadCircuit } from "react-icons/pi";
import Button from "../../Components/Button/Button";

export const CarouselImages = [images.members, images.team, images.workers];

const Home: React.FC = () => {
  return (
    <div>
      {/*Carousel Header*/}
      <div>
        <Carousel CarouselImages={CarouselImages} />
        <HeaderTitle
          firstTitle="Team up With The Best"
          secondTitle2="Developers from Cameroon and Africa"
          subtitle="promoting tech in all domains"
          logo={images.logo1}
        />
      </div>

      {/*Database and cloud environment*/}
      <div className="flex items-center gap-20 justify-center pt-20">
        <div className="w-100">
          <Subtitle
            className="text-primary text-5xl font-medium"
            title="Scale databases and cloud Environments with ease"
            description="You’ve got the idea, we make  it  a reality at  "
          />
          <span className="text-secondary">Appstech</span>
        </div>
        <div>
          <img src={images.members} alt="" />
        </div>
      </div>

      {/*Trusted companies*/}
      <div className="relative flex flex-col items-center text-center justify-center pt-20 bg-linear-to-t from-white-200 to-sky-200">
        <div>
          <Subtitle
            className="text-primary text-4xl font-medium"
            title="Trusted by several Companies out there"
            description="Our strength is built on the trust of our most loyal clients"
          />
        </div>
        <div className="flex gap-20 pt-25">
          <Companies
            amount="20k+"
            icons={<PiBuildingOfficeBold size={50} />}
            text="monthly companies"
          />
          <Companies
            amount="7k+"
            icons={<HiBuildingOffice2 size={50} />}
            text="monthly companies"
          />
          <Companies
            amount="10k+"
            icons={<GrNotes size={50} />}
            text="monthly companies"
          />
        </div>
        <div className="absolute left-[29px] bottom-3 size-48 rounded-full bg-radial-[at_50%_75%] via-sky-100 from-white-100 to-sky-200 to-90%"></div>
        <div className="absolute right-[30px] top-23  size-58 rounded-full bg-radial-[at_50%_75%] via-sky-200 from-white-100 to-sky-200 to-90%"></div>
      </div>

      {/*Powered systems*/}
      <div className="flex items-center justify-center gap-30">
        <div>
          <h2 className="text-4xl font-bold text-secondary pb-5">
            Get inovative with AI
          </h2>
          <h1 className="text-5xl font-bold text-primary">Powered Systems</h1>
          <div className="p-9">
            <div className="flex gap-2 pb-3 items-center">
              <LuBrain className="text-primary" size={40} />
              <p className="text-xl text-accent">Machine Learning</p>
            </div>
            <div className="flex gap-2 pb-3 items-center">
              <LuBrainCircuit className="text-primary" size={40} />
              <p className="text-xl text-accent">Deep learning</p>
            </div>
            <div className="flex gap-2 pb-3 items-center">
              <PiHeadCircuit className="text-primary" size={40} />
              <p className="text-xl text-accent">Neural Networks</p>
            </div>
          </div>
        </div>
        <div>
          <img src={images.visual_lense} alt="" />
        </div>
      </div>

      {/*Academic Internship*/}
      <div className="flex items-center justify-center gap-30 py-20">
        <div>
          <img src={images.team} alt="" />
        </div>
        <div>
          <Subtitle
            className="text-primary text-4xl font-medium w-100"
            title="Offer Professional and Academic internship"
            description="We build and train for the next Generation"
          />
          <Button title="Apply now" />
        </div>
      </div>

      {/*Platinium partner*/}
      <div className="relative flex flex-col items-center justify-center py-20  bg-linear-to-t from-sky-200 to-white-200">
        <div className="flex items-center gap-60">
          <div>
            <h1 className="font-bold text-4xl text-primary pb-3">Oracle</h1>
            <h1 className="font-bold text-4xl text-secondary pb-5">
              {" "}
              Platinum Partner{" "}
            </h1>
            <p className="text-accent text-xl w-80">
              work efficiency and reliable results are what we do best{" "}
            </p>
          </div>
          <div>
            <img src={images.trophy} alt="" />
          </div>
        </div>
        <p className="text-2xl p-6">Some clients</p>
        <div className="flex flex-row items-center gap-10 pt-6">
          <img src={images.MTN_Logo} alt="" />
          <img src={images.dell} alt="" />
          <img src={images.mastercard} alt="" />
          <img src={images.Afriland} alt="" />
          <img src={images.oracle} alt="" />
          <img src={images.atlantic} alt="" />
        </div>
        <div className="absolute left-[29px] bottom-3 size-48 rounded-full bg-radial-[at_50%_75%] via-sky-200 from-white-100 to-sky-200 to-90%"></div>
        <div className="absolute right-[30px] top-23  size-58 rounded-full bg-radial-[at_50%_75%] via-sky-100 from-white-100 to-sky-200 to-90%"></div>
      </div>

      {/*global support*/}
      <div className="flex items-center justify-center gap-30 py-30">
        <div>
          <Subtitle
            className="text-primary text-4xl font-medium w-80"
            title="AppsTech global Support"
            description="Provide  service support"
          />
          <p className="text-blue-300">24/7/365</p>
          <Button title="Contact Us" />
        </div>
        <div>
          <img src={images.lady_smiling} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

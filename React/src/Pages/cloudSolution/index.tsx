import React from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import { images } from "../../Types/images";
import Subtitle from "../../Components/Subtitle";
import Button from "../../Components/Button/Button";

function CloudSolution() {
  return (
    <div className="">
      {/*Carousel Header*/}
      <div>
        <div>
          <img className="w-full h-200" src={images.cloud_solution} alt="" />
        </div>
        <HeaderTitle
          firstTitle="Cloud Solutions"
          secondTitle2="Developers from Cameroon and Africa"
          subtitle="explore a wide range of  Oracle cloud services with just one click"
          logo={images.logo1}
        />
      </div>

      {/*Cloud Platform*/}
      <div className="flex items-center justify-center gap-30 py-20">
        <div className="w-90">
          <Subtitle
            className="text-primary text-4xl font-bold"
            title="Cloud Platform"
            description="Explore a wide range of  Oracle cloud services with just one click"
          />
          <Button title="Learn More" />
        </div>
        <div>
          <img src={images.cloudPlatform} alt="" />
        </div>
      </div>

      {/*Cloud Infrastructure*/}
      <div className="flex items-center justify-center gap-50 py-20">
        <div>
          <img src={images.cloud} alt="" />
        </div>
        <div>
          <div className="w-90">
            <Subtitle
              className="text-primary text-4xl font-bold "
              title="Cloud Infrastructure"
              description="Oracle’s Cloud Platform provides a shared and elastically scalabel platform for consolidating existing applications and developing and deploying new applications."
            />
            <Button title="Learn More" />
          </div>
        </div>
      </div>

      {/*Cloud Applications*/}
      <div className="flex flex-col items-center justify-center pt-10">
        <Subtitle
          className="text-primary text-4xl font-bold text-center"
          title="Cloud Applications"
          description="horizontal and industry-specific cloud applications."
        />
        <img className="pt-20 w-full" src={images.cloudApp} alt="" />
      </div>
    </div>
  );
}

export default CloudSolution;

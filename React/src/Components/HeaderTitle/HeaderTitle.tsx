import React from "react";

interface HeaderProps {
  firstTitle: string;
  secondTitle2: string,
  subtitle: string;
  logo: string;
}

const HeaderTitle: React.FC<HeaderProps> = ({ firstTitle, secondTitle2, subtitle, logo }) => {
  return (
    <div className="flex gap-230 absolute bottom-45 px-30 flex">
      <div>
        <h1 className="text-3xl font-medium text-white">{firstTitle}</h1>
        <h1 className="text-3xl font-small text-white">{secondTitle2}</h1>
        <p className="text-primary font-bold text-xl pt-3">{subtitle}</p>
      </div>
      <div className="mt-20">
        <img src={logo} alt="" />
      </div>
      
    </div> 
  );
};

export default HeaderTitle;

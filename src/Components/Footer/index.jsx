import React from "react";
import googlePlay from "../../assets/google-play.svg";
import appStore from "../../assets/app-store.svg";
const Footer = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      <div className="grid grid-cols-4 justify-items-center p-5 m-5">
        <div className="flex flex-col justify-around m-5">
          <div className="text-xl">Logo</div>
          <div className="py-2 text-sm">+1-234-567-890</div>
          <div className="py-2 text-sm">
            Rockefeller Plaza New York,NY 10112
          </div>
        </div>
        <div className="flex flex-col justify-around m-5">
          <div className="text-xl">Learn More</div>
          <div className="py-2 text-sm">
            <a href="#">How it work</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">Who we are</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">Careers</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">Blog</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">FAQs</a>
          </div>
        </div>
        <div className="flex flex-col justify-around m-5">
          <div className="text-xl">Social</div>
          <div className="py-2 text-sm">
            <a href="#">Facebook</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">Instagram</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">Twitter</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">Pinterest</a>
          </div>
          <div className="py-2 text-sm">
            <a href="#">Linkedin</a>
          </div>
        </div>
        <div className="flex flex-col justify-around m-5">
          <div className="text-xl">Downloads</div>
          <div className="flex flex-row justify-between">
            <img src={googlePlay} />
            <div className="flex flex-col justify-center align-middle">
              <div className="text-xs">GET IT ON</div>
              <div>GOOGLE PLAY</div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <img alt="" src={appStore} />
            <div className="flex flex-col justify-center align-middle">
              <div className="text-xs">Download on the</div>
              <div>APP STORE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-5  border-t-2 border-zinc-100 p-5">
        <div>Copyright © 2020 Company Name All rights reserved</div>
        <div className="grid grid-cols-3 justify-items-start ">
          <div>Term of Use</div>
          <div>Privacy Police</div>
          <div>Cardholder Agreement</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

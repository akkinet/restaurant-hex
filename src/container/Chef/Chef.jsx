import React from "react";
import { meal1 } from '../../constants';
import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      {/* <img src={images.chef} alt="chef-img?" /> */}
      <div className="app__video">
        <video src={meal1} autoPlay loop muted />
      </div>
      <div className="spoon-container">
        <img className="spoon_master" src={images.spoonMaster} alt="" />
      </div>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">``
            Your body is not a temple, it's an amusement park. Enjoy the ride.
          </p>
        </div>
        <p className="p__opensans" > Gordon Ramsay advised, "Put your head down and work hard. Never wait for things to happen." Anthony Bourdain believed, "Your body is not a temple, it's an amusement park." Alice Waters emphasized, "Good food should be a right and not a privilege.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans"> Chef and Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;

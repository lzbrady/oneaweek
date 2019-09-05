import React, { Component } from "react";
import banner from "../Images/sponsors_banner.jpg";
import handsOnGlobe from "../Images/hands_on_globe.jpg";
import logo from "../Images/1_a_week_logo.jpg";

import "./About.css";

var smallImageStyle = {
  width: "20%",
  maxWidth: "200px"
};

class About extends Component {
  render() {
    return (
      <div>
        <div id="about-container">
          <h1 className="home-page-body-heading headline act-header">
            Our Mission
          </h1>
          <p className="home-page-body-text act-body">
            We came together and reflected on the lack of selflessness within
            our communities and in the grand scheme of things, our society. In
            today’s fast paced stressful world, it is amazing what one door
            held, one dollar, or one smile can do to a person’s mood or day.
          </p>
          <img
            className="home-page-image"
            src={handsOnGlobe}
            alt="Hands on globe"
          />
          <p className="home-page-body-text act-body">
            Seeing the need for a{" "}
            <span className="hightlight-text">“selflessness resurrection”</span>
            , we individually adopted a “1 a Week” challenge, where each week we
            do AT LEAST one nice thing for someone in our lives or a stranger,
            and report back to each other for accountability. If we do not
            successfully perform an act of kindness, we donate money to a cause
            that we personally connect with.
          </p>

          <div className="home-page-text-image-container">
            <img
              className="home-page-image"
              src={logo}
              alt="1 a Week Logo"
              style={smallImageStyle}
            />
            <p className="home-page-body-text act-body">
              Boomer and Derek have enjoyed the fruits of their actions and are
              here today to challenge “YOU” to join us on this journey. Be a
              part of the 1 a Week team and start spreading love and kindness to
              those around. Be nice, be kind, and most importantly….BE YOU!
            </p>
          </div>

          <h1 className="home-page-body-heading headline act-header">Ideas</h1>
          <p className="home-page-body-text act-body">
            We have even included a list of ideas to start you off! Please share
            photos of your challenges or add comments to share more ideas with
            the community!
          </p>
          <ul className="home-list">
            <li className="home-list-item">Help someone tie their shoe</li>
            <li className="home-list-item">Pick up trash</li>
            <li className="home-list-item">
              Write a nice note to your teacher
            </li>
            <li className="home-list-item">Donate old clothes or toys</li>
            <li className="home-list-item">Give a compliment to a friend</li>
            <li className="home-list-item">Help a classmate with their work</li>
            <li className="home-list-item">Sharpen a classmates pencils</li>
            <li className="home-list-item">
              Sit with someone at lunch who is alone
            </li>
            <li className="home-list-item">
              Buy a gift for someone for no occasion
            </li>
            <li className="home-list-item">Help cleanup a mess</li>
          </ul>
        </div>

        <div className="sponsor-container">
          <img
            style={{
              width: "100%",
              maxWidth: "800px"
            }}
            src={banner}
            alt="Unite Together"
          />

          <h1>Our 2019 Sponsors</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="https://www.pearcards.com"
          >
            PEAR Cards
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="http://www.thewakeupp.com"
          >
            The Wake Up
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="https://www.etsy.com/nl/shop/Katreative?fbclid=IwAR1A1nJUw0NiCpxR6v7lFbdCnFb5DZKqkEf3TTm9ae-GTzZCXm2M4WpdK24"
          >
            Katreative
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="https://edgewatchco.com/"
          >
            Edge Watch Company
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="https://globalwakecup.com/"
          >
            Global Wake Cup
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="https://www.soxytime.com/"
          >
            Soxy Time
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="https://artbyamy.gallery/"
          >
            Art by Amy
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            href="https://www.lovemorethanever.com/"
          >
            Love More Than Ever
          </a>
        </div>
      </div>
    );
  }
}

export default About;

import React, {Component} from "react";
import banner from "../Images/sponsors_banner.jpg";

import "./About.css";

class About extends Component {
    render() {
        return <div>
            <div id="about-container">
                <h1 className="home-page-body-heading headline">Our Mission</h1>
                <p className="home-page-body-text">
                    We came together and reflected on the lack of selflessness within our
                    communities and in the grand scheme of things, our society. In today’s fast
                    paced stressful world, it is amazing what one door held, one dollar, or one
                    smile can do to a person’s mood or day.
                    <br/><br/>
                    Seeing the need for a
                    <span className="hightlight-text">“selflessness resurrection”</span>, we
                    individually adopted a 1 a week challenge, where each week we do one nice thing
                    for somebody in our lives or a stranger, and would report back to each other for
                    accountability. If we did not successfully perform one act of kindness, we would
                    donate money to a cause that we personally connected with.
                </p>

                <p className="home-page-body-text">Boomer and Derek have enjoyed the fruits of
                    their actions, and are here today to challenge “YOU” to join us on our 1 a week
                    pledge/challenge. Follow us on
                    <a
                        className="home-page-body-link"
                        href="https://www.facebook.com/1aWeekChallenge/">
                        Facebook
                    </a>
                    and
                    <a className="home-page-body-link" href="https://www.instagram.com/_1aweek/">
                        Instagram
                    </a>
                    (@_1aweek) to see how you can make a difference.
                </p>

                <h1 className="home-page-body-heading headline">Ideas</h1>
                <p className="home-page-body-text">
                    We have even included a list of ideas to start you off! Please share photos of
                    your challenges or add comments to share more ideas with the community!
                </p>
                <ul>
                    <li>Buy a gift for someone for no occasion
                    </li>
                    <li>Buy a stranger a meal
                    </li>
                    <li>Host a dinner and do everything yourself
                    </li>
                    <li>Pay for the car behind you at a drive thru
                    </li>
                    <li>Pick up trash at a park</li>
                    <li>Give out flowers to strangers
                    </li>
                    <li>Hand out waters on a warm day
                    </li>
                    <li>Volunteer
                    </li>
                    <li>Leave an over the top tip</li>
                    <li>Donate old clothes or toys</li>
                </ul>
            </div>

            <div className="sponsor-container">
                <img
                    style={{
                    width: "100%",
                    maxWidth: "800px"
                }}
                    src={banner}
                    alt="Unite Together"/>
                <h1>Our Supporters</h1>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/groups/677838459089544/">Lost Souls Mental Health Group</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/domesticabuseproject/">Domestic Abuse Project</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/Operationplay/">Let Kids be Kids</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/savingveteranshomes/">Saving Veteran Homes</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/givebackyoga/">Give Back Yoga Foundation</a>

                <h1>Our 2018 Sponsors</h1>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/passthepear/">PEAR Cards</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/allstarhumanperformance/">All-Star Human Performance</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/lostformat/">Lost Format Apparel
                </a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/Katreative/">Katreative</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/EdgeWatchCo/">Edge Watch Company</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor"
                    href="https://www.facebook.com/thewakeupp/">The Wake Up</a>
            </div>
        </div>;
    }
}

export default About;
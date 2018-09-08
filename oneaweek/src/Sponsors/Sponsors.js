import React, {Component} from "react";
import banner from "../Images/sponsors_banner.jpg";

import "./Sponsors.css";

class Sponsors extends Component {
    render() {
        return <div>
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

export default Sponsors;

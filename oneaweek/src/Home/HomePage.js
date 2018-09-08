import React, {Component} from "react";
import FacebookProvider, {Page} from "react-facebook";

import ShareActButton from "./ShareActButton";
import SpotlightActs from "./SpotlightActs";

import "./HomePage.css";

class HomePage extends Component {
    render() {
        return (
            <div id="body">
                <ShareActButton/>
                <h1 id="spotlight-title">Get Inspiration From Others!</h1>
                <SpotlightActs/>

                <div id="body-left-wrapper" className="feed-container">
                    <h1 className="home-page-body-heading">Make a Difference</h1>
                    <p className="home-page-body-text">
                        1 A Week is an organization which promotes acts of kindness and mental health.
                        Hoping to make an impact on the world.
                    </p>

                    <h1 className="home-page-body-heading">Our Mission</h1>
                    <p className="home-page-body-text">
                        We came together and reflected on the lack of selflessness within our
                        communities and in the grand scheme of things, our society. In today’s fast
                        paced stressful world, it is amazing what one door held, one dollar, or one
                        smile can do to a person’s mood or day. Seeing the need for a “selflessness
                        resurrection”, we individually adopted a 1 a week challenge, where each week we
                        do one nice thing for somebody in our lives or a stranger, and would report back
                        to each other for accountability. If we did not successfully perform one act of
                        kindness, we would donate money to a cause that we personally connected with.
                    </p>

                    <p className="home-page-body-text">Boomer and Derek have enjoyed the fruits of their
                        actions, and are here today to challenge “YOU” to join us on our 1 a week
                        pledge/challenge. Follow us on
                        <a className="home-page-body-link" href="https://www.facebook.com/1aWeekChallenge/">
                            Facebook
                        </a>
                        and
                        <a className="home-page-body-link" href="https://www.instagram.com/_1aweek/">
                            Instagram
                        </a>
                        (@_1aweek) to see how you can make a difference.
                    </p>

                    <h1 className="home-page-body-heading">Ideas</h1>
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

                <div id="body-right-wrapper" className="feed-container">
                    <FacebookProvider className="feed" id="facebook-feed" appId="204154203726841">
                        <Page href="https://www.facebook.com/1aWeekChallenge" tabs="timeline"/>
                    </FacebookProvider>
                </div>
            </div>
        );
    }
}

export default HomePage;

import { Link } from 'react-router-dom';
import { STEAM_ICON_SVG, ARROW_LEFT_PNG } from '../../../assets/images';

const FirstPage = () => (
  <div className="home-first-page">
    <div className="home-first-page-left">
      <div className="main-quote">
        <div className="main-quote-text">“A MODERN MULTIPLAYER MASTERPIECE.”</div>
        <div className="main-quote-author">- DESTRUCTOID</div>
        <div className="homepage-horizonBar" />
      </div>
      <div className="steam-play">
        <img src={STEAM_ICON_SVG} alt="" />
        <div className="steam-play-right">
          <div className="text">Play for Free</div>
          <div className="download">Download on Steam</div>
        </div>
      </div>
    </div>
    <div className="home-first-page-right">
      <div className="home-news-container">
        <div className="news-top">
          <div className="latest-news">Latest News</div>
          <Link to="/">View All</Link>
          <img className="homePage-right-arrow" src={ARROW_LEFT_PNG} alt="" />
        </div>

        <div className="news-component-conatiner">
          <Link className="blogcapsule-BlogCapsule" to="/">
            <div className="blogcapsule-Entry">
              <div className="fade-FadeContainer-1JDI3 fade-Bottom-1NXAh">
                <div className="fade-Fade" />
              </div>
              <div className="blogcapsule-Desc">
                At long last, the top Dota teams in the world will gather this October to wage the
                tenth battle to claim the Aegis of Champions.
              </div>
              <div className="blogcapsule-Title">The International 2021 Ticket Sales</div>
              <div className="blogcapsule-Date">September 4, 2021</div>
            </div>
          </Link>
          {/* Second News Container */}
          <Link className="blogcapsule-BlogCapsule" to="/">
            <div className="blogcapsule-Entry">
              <div className="fade-FadeContainer-1JDI3 fade-Bottom-1NXAh">
                <div className="fade-Fade" />
              </div>
              <div className="blogcapsule-Desc">
                At long last, the top Dota teams in the world will gather this October to wage the
                tenth battle to claim the Aegis of Champions.
              </div>
              <div className="blogcapsule-Title">The International 2021 Ticket Sales</div>
              <div className="blogcapsule-Date">September 4, 2021</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default FirstPage;

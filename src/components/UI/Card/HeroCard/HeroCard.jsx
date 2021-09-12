/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import './HeroCard.css';
import { ABADDON_PNG } from '../../../../assets/images';

const HeroCard = () => (
  <Link
    className="herogridpage_HeroIcon"
    to="/hero/abaddon"
    style={{
      backgroundImage: `url(${ABADDON_PNG})`,
    }}
  >
    <div className="herogridpage_HeroNameContainer">
      <img
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
        className="herogridpage_PrimaryStatIcon"
        alt=""
      />
      <div className="herogridpage_HeroName">Abaddon</div>
    </div>
    <div className="herogridpage_FadeContainer">
      <div className="fade_FadeContainer">
        <div className="fade_Fade" />
      </div>
    </div>
  </Link>
);
export default HeroCard;

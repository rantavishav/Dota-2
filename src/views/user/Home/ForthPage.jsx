import { Link } from 'react-router-dom';

const ForthPage = () => (
  <div className="home-forth-page">
    <div className="homepage_JoinBattleSection">
      <div className="homepage_HeaderText">
        <span className="Minor">Join the</span>
        <span className="Major">
          <br />
          Battle
        </span>
        <br />
        <div className="homepage-horizonBar" />
      </div>

      <Link href="https://store.steampowered.com/app/570/Dota_2/">
        <div className="homepage_StandardButton">
          <div className="homepage_ButtonText">Play Free Now</div>
        </div>
      </Link>
    </div>
  </div>
);
export default ForthPage;

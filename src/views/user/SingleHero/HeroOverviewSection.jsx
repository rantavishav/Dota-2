/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import {
  ARROW__SOLID_LEFT_PNG,
  HERO_AGILITY_PNG,
  HERO_INTELLIGENCE_PNG,
  HERO_STRENGTH_PNG,
  MELEE_ATTACK_TYPE,
  RANGED_ATTACK_TYPE_SVG,
} from '../../../assets/images';

/* eslint-disable max-len */
const HeroOverViewSection = props => {
  const { heroData, previousHeroName, nextHeroName } = props;
  const [hideBio, setHideBio] = useState(true);

  return (
    <div className="heroPage_UpperSection">
      <div className="heropage_BackgroundGradient" />

      {/* Side menu grid */}
      <div className="heropage_HeroNavigator">
        <Link
          className="heropage_NavigatorArrow heropage_Left"
          to={`/heroes/${previousHeroName}`}
          style={{ backgroundImage: `url(${ARROW__SOLID_LEFT_PNG})` }}
        />
        <Link className="heropage_CenterGrid" to="/heroes">
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
        </Link>
        <Link
          className="heropage_NavigatorArrow heropage_Right"
          to={`/heroes/${nextHeroName}`}
          style={{ backgroundImage: `url(${ARROW__SOLID_LEFT_PNG})` }}
        />
      </div>

      {/* Hero video Portrait */}
      <div className="heropage_HeroPortraitContainer">
        <ReactPlayer
          playing
          loop
          muted
          fallback={<div>Loading...</div>}
          className="heropage_HeroPortrait"
          url={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroData.name.slice(
            14,
          )}.webm`}
        />
      </div>

      {/* Hero description */}
      <div className="heropage_HeroSummary">
        <div className="heropage_HeroTypeTitle">
          <img
            src={
              heroData.primary_attr === 'str'
                ? HERO_STRENGTH_PNG
                : heroData.primary_attr === 'agi'
                ? HERO_AGILITY_PNG
                : HERO_INTELLIGENCE_PNG
            }
            alt=""
            className="heropage_PrimaryStatIcon"
          />
          <div className="heropage_PrimaryStat">
            {heroData.primary_attr === 'str'
              ? 'STRENGTH'
              : heroData.primary_attr === 'agi'
              ? 'AGILITY'
              : 'INTELLIGENCE'}
          </div>
        </div>
        <div className="heropage_HeroName">{heroData.localized_name}</div>
        <div className="heropage_HeroOneLiner">
          Earns extra gold from unit kills and bounty runes
        </div>

        <div className="heropage_BioOrSummaryContainer">
          <div className={`heropage_BioContainer ${hideBio ? 'heropage_Hidden' : ''}`}>
            The sacred science of Chymistry was a Darkbrew family tradition, but no Darkbrew had
            ever shown the kind of creativity, ambition, and recklessness of young Razzil. However,
            when adulthood came calling he pushed aside the family trade to try his hand at
            manufacturing gold through Alchemy.
            <span>
              <br />
              <span>
                <br />
                In an act of audacity befitting his reputation, Razzil announced he would transmute
                an entire mountain into gold. Following two decades of research and spending and
                preparation, he failed spectacularly, quickly finding himself imprisoned for the
                widespread destruction his experiment wrought. Yet Razzil was never one to take a
                setback lightly, and sought escape to continue his research.
                <span>
                  <br />
                  <span>
                    <br />
                    When his new cellmate turned out to be a fierce ogre, he found just the
                    opportunity he needed. After convincing the ogre not to eat him, Razzil set
                    about carefully concocting a tincture for it to drink, made from the moulds and
                    mosses growing in the prison stone work. In a week&apos;s time, it seemed ready.
                    When the ogre drank the potion, it flew into an unstoppable berserker rage,
                    destroying the cell bars and exploding through walls and guards alike.
                    <span>
                      <br />
                      <span>
                        <br />
                        They soon found themselves lost somewhere in the forest surrounding the city
                        with a trail of wreckage in their wake and no signs of pursuit. In the
                        tonic&apos;s afterglow, the ogre seemed serene, happy, and even eager.
                        Resolving to work together, the pair set off to collect the materials needed
                        to attempt Razzil&apos;s Alchemic transmutation once more.
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <div className="heropage_ShowBio" onClick={() => setHideBio(!hideBio)}>
              Close History
            </div>
          </div>

          <div className={`heropage_SummaryContainer ${hideBio ? '' : 'heropage_Hidden'}`}>
            <div className="heropage_Lore">
              Synthesizing <span className="Bold">extra resources</span> from each and every kill,
              Alchemist has no trouble gathering the tools needed to destroy his foes. Ambushing
              enemies with <span className="Bold">corrosive acid</span> and a host of{' '}
              <span className="Bold">unstable chemicals</span>, he battles to ensure his greedy
              escapades can remain uninterrupted.
              <div className="heropage_ShowBio" onClick={() => setHideBio(!hideBio)}>
                Read Full History
              </div>
            </div>

            <div>
              <div className="heropage_Title">Attack Type</div>
              <div className="heropage_AttackTypeDetail">
                <img
                  className="heropage_AttackTypeIcon"
                  src={
                    heroData.attack_type === 'Ranged' ? RANGED_ATTACK_TYPE_SVG : MELEE_ATTACK_TYPE
                  }
                  alt=""
                />
                <div className="heropage_Value">{heroData.attack_type}</div>
              </div>
            </div>

            <div>
              <div className="heropage_Title">Complexity</div>
              <div className="heropage_PipContainer">
                <div className="heropage_DiamondPip heropage_Filled" />
                <div className="heropage_DiamondPip" />
                <div className="heropage_DiamondPip" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* left Side Hero name line */}
      <div className="heropage_HeroVerticalBar">
        <img
          src={
            heroData.primary_attr === 'str'
              ? HERO_STRENGTH_PNG
              : heroData.primary_attr === 'agi'
              ? HERO_AGILITY_PNG
              : HERO_INTELLIGENCE_PNG
          }
          alt=""
          className="heropage_PrimaryStatIcon"
        />
        <div className="heropage_HeroName">{heroData.localized_name}</div>
        <div className="heropage_HeroID">{heroData.id}</div>
        <div className="heropage_Line" />
      </div>
    </div>
  );
};

export default HeroOverViewSection;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ARROW__SOLID_LEFT_PNG, HERO_AGILITY_PNG } from '../../../assets/images';
import './SingleHero.css';

const SingleHero = () => {
  const [hideBio, setHideBio] = useState(true);
  const [showAblitiyButton, setShowAblitiyButton] = useState(1); // index of the image to show
  return (
    <>
      <div className="heroPage_UpperSection">
        <div className="heropage_BackgroundGradient" />

        {/* Side menu grid */}
        <div className="heropage_HeroNavigator">
          <Link
            className="heropage_NavigatorArrow heropage_Left"
            to="/hero/abaddon"
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
            to="/hero/abaddon"
            style={{ backgroundImage: `url(${ARROW__SOLID_LEFT_PNG})` }}
          />
        </div>

        {/* Hero video Portrait */}
        <div className="heropage_HeroPortraitContainer alchemist">
          <video
            className="heropage_HeroPortrait"
            poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.png"
            autoPlay
            preload="auto"
            loop
            playsinline
          >
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.webm"
            />
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.png"
              alt=""
            />
          </video>
        </div>

        {/* Hero description */}
        <div className="heropage_HeroSummary">
          <div className="heropage_HeroTypeTitle">
            <img src={HERO_AGILITY_PNG} alt="" className="heropage_PrimaryStatIcon" />
            <div className="heropage_PrimaryStat">Strength</div>
          </div>
          <div className="heropage_HeroName">Alchemist</div>
          <div className="heropage_HeroOneLiner">
            Earns extra gold from unit kills and bounty runes
          </div>

          <div className="heropage_BioOrSummaryContainer">
            <div className={`heropage_BioContainer ${hideBio ? 'heropage_Hidden' : ''}`}>
              The sacred science of Chymistry was a Darkbrew family tradition, but no Darkbrew had
              ever shown the kind of creativity, ambition, and recklessness of young Razzil.
              However, when adulthood came calling he pushed aside the family trade to try his hand
              at manufacturing gold through Alchemy.
              <span>
                <br />
                <span>
                  <br />
                  In an act of audacity befitting his reputation, Razzil announced he would
                  transmute an entire mountain into gold. Following two decades of research and
                  spending and preparation, he failed spectacularly, quickly finding himself
                  imprisoned for the widespread destruction his experiment wrought. Yet Razzil was
                  never one to take a setback lightly, and sought escape to continue his research.
                  <span>
                    <br />
                    <span>
                      <br />
                      When his new cellmate turned out to be a fierce ogre, he found just the
                      opportunity he needed. After convincing the ogre not to eat him, Razzil set
                      about carefully concocting a tincture for it to drink, made from the moulds
                      and mosses growing in the prison stone work. In a week&apos;s time, it seemed
                      ready. When the ogre drank the potion, it flew into an unstoppable berserker
                      rage, destroying the cell bars and exploding through walls and guards alike.
                      <span>
                        <br />
                        <span>
                          <br />
                          They soon found themselves lost somewhere in the forest surrounding the
                          city with a trail of wreckage in their wake and no signs of pursuit. In
                          the tonic&apos;s afterglow, the ogre seemed serene, happy, and even eager.
                          Resolving to work together, the pair set off to collect the materials
                          needed to attempt Razzil&apos;s Alchemic transmutation once more.
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
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg"
                    alt=""
                  />
                  <div className="heropage_Value">Melee</div>
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
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
            alt=""
            className="heropage_PrimaryStatIcon"
          />
          <div className="heropage_HeroName">Alchemist</div>
          <div className="heropage_HeroID">60</div>
          <div className="heropage_Line" />
        </div>
      </div>

      {/* ----------------Hero Stats------------- */}
      <div className="heropage_DetailsBarContainer">
        <div className="heropage_DetailsBar">
          <div className="heropage_DetailsAttributes">
            <div className="heropage_TopAttributesSection">
              <div className="heropage_PortraitContainer">
                <img
                  className="heropage_Portrait"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png"
                  alt=""
                />
                <div className="heropage_HealthBar">
                  <div className="heropage_BarNumberMajor">700</div>
                  <div className="heropage_BarNumberMinor">+2.8</div>
                </div>
                <div className="heropage_ManaBar">
                  <div className="heropage_BarNumberMajor">375</div>
                  <div className="heropage_BarNumberMinor">+1.3</div>
                </div>
              </div>
              <div className="heropage_AttributesContainer">
                <div className="heropage_SingleAttributeContainer">
                  <img
                    className="heropage_AttributeIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                    alt=""
                  />
                  <div className="heropage_AttributeValue">25</div>
                  <div className="heropage_AttributeGain">+2.7</div>
                </div>
                <div className="heropage_SingleAttributeContainer">
                  <img
                    className="heropage_AttributeIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                    alt=""
                  />
                  <div className="heropage_AttributeValue">22</div>
                  <div className="heropage_AttributeGain">+1.5</div>
                </div>
                <div className="heropage_SingleAttributeContainer">
                  <img
                    className="heropage_AttributeIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                    alt=""
                  />
                  <div className="heropage_AttributeValue">25</div>
                  <div className="heropage_AttributeGain">+1.8</div>
                </div>
              </div>
            </div>
            <div className="heropage_DetailsSectionHeader">Attributes</div>
          </div>

          <div className="heropage_VerticalSeperator" />

          <div className="heropage_DetailsRoles">
            <div className="heropage_RolesList">
              <div className="heropage_Role">
                <div className="heropage_RoleName">Carry</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '66.6%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Support</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '33.3%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Nuker</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '33.3%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Disabler</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '33.3%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Jungler</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '0%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Durable</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '66.6%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Escape</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '0%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Pusher</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '0%' }} />
                </div>
              </div>
              <div className="heropage_Role">
                <div className="heropage_RoleName">Initiator</div>
                <div className="heropage_BarContainer">
                  <div className="heropage_BarBackground" />
                  <div className="heropage_BarFilled" style={{ width: '33.3%' }} />
                </div>
              </div>
            </div>

            <div className="heropage_DetailsSectionHeader">Roles</div>
          </div>

          <div className="heropage_VerticalSeperator" />

          <div className="heropage_DetailsStats">
            <div className="heropage_StatsList">
              <div className="heropage_HeroValuesSection">
                <div className="heropage_HeroValueTitle">Attack</div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                    alt=""
                  />
                  52-58
                </div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png"
                    alt=""
                  />
                  1.7
                </div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
                    alt=""
                  />
                  150
                </div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png"
                    alt=""
                  />
                  900{' '}
                </div>
              </div>
              <div className="heropage_HeroValuesSection">
                <div className="heropage_HeroValueTitle">Defense</div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
                    alt=""
                  />
                  2.7
                </div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png"
                    alt=""
                  />
                  25%
                </div>
              </div>
              <div className="heropage_HeroValuesSection">
                <div className="heropage_HeroValueTitle">Mobility</div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                    alt=""
                  />
                  305
                </div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png"
                    alt=""
                  />
                  0.6
                </div>
                <div className="heropage_ValueElement">
                  <img
                    className="heropage_SwordIcon"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png"
                    alt=""
                  />
                  1800 / 800
                </div>
              </div>
            </div>
            <div className="heropage_DetailsSectionHeader">Stats</div>
          </div>
        </div>
      </div>

      {/* ----------------Heroes ability section---------------- */}
      <div className="heropage_AbilityContainer">
        <div className="heropage_AbilityDetailsSection">
          <div className="heropage_AbilityDetailsHeader">Ability Details:</div>
        </div>

        <div className="heropage_HeroAbilities">
          {/* Left container */}
          <div className="heropage_AbilityLeft">
            <div className="heropage_VideoContainer">
              <div className="heropage_FadeUp" />
              <video
                className="heropage_HeroPortrait"
                autoPlay
                preload="auto"
                loop
                muted
                playsinline
                poster={`${
                  showAblitiyButton === 1
                    ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_acid_spray.jpg'
                    : ''
                } ${
                  showAblitiyButton === 2
                    ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_unstable_concoction.jpg'
                    : ''
                } ${
                  showAblitiyButton === 3
                    ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_goblins_greed.jpg'
                    : ''
                } ${
                  showAblitiyButton === 4
                    ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_chemical_rage.jpg'
                    : ''
                } ${
                  showAblitiyButton === 5
                    ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_aghanims_shard.jpg'
                    : ''
                } ${
                  showAblitiyButton === 6
                    ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_aghanims_scepter.jpg'
                    : ''
                }`}
              >
                <source
                  type="video/webm"
                  src={`${
                    showAblitiyButton === 1
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_acid_spray.webm'
                      : ''
                  } ${
                    showAblitiyButton === 2
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_unstable_concoction.webm'
                      : ''
                  } ${
                    showAblitiyButton === 3
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_goblins_greed.webm'
                      : ''
                  } ${
                    showAblitiyButton === 4
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_chemical_rage.webm'
                      : ''
                  } ${
                    showAblitiyButton === 5
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_aghanims_shard.webm'
                      : ''
                  } ${
                    showAblitiyButton === 6
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_aghanims_scepter.webm'
                      : ''
                  }`}
                />
                <source
                  type="video/mp4"
                  src={`${
                    showAblitiyButton === 1
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_acid_spray.mp4'
                      : ''
                  } ${
                    showAblitiyButton === 2
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_unstable_concoction.mp4'
                      : ''
                  } ${
                    showAblitiyButton === 3
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_goblins_greed.mp4'
                      : ''
                  } ${
                    showAblitiyButton === 4
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_chemical_rage.mp4'
                      : ''
                  } ${
                    showAblitiyButton === 5
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_aghanims_shard.mp4'
                      : ''
                  } ${
                    showAblitiyButton === 6
                      ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_aghanims_scepter.mp4'
                      : ''
                  }`}
                />
              </video>
            </div>

            <div className="heropage_AbilitySelector">
              <div
                onClick={() => setShowAblitiyButton(1)}
                className={`heropage_AbilitySelectable ${
                  showAblitiyButton === 1 ? '' : 'heropage_NotSelected'
                }`}
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png")',
                }}
              />
              <div
                onClick={() => setShowAblitiyButton(2)}
                className={`heropage_AbilitySelectable ${
                  showAblitiyButton === 2 ? '' : 'heropage_NotSelected'
                }`}
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction.png")',
                }}
              />
              <div
                onClick={() => setShowAblitiyButton(3)}
                className={`heropage_AbilitySelectable ${
                  showAblitiyButton === 3 ? '' : 'heropage_NotSelected'
                }`}
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_goblins_greed.png")',
                }}
              />
              <div
                onClick={() => setShowAblitiyButton(4)}
                className={`heropage_AbilitySelectable ${
                  showAblitiyButton === 4 ? '' : 'heropage_NotSelected'
                }`}
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png")',
                }}
              />
              <div
                onClick={() => setShowAblitiyButton(5)}
                className={`heropage_AbilitySelectable heropage_Shard  ${
                  showAblitiyButton === 5 ? '' : 'heropage_NotSelected'
                }`}
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_berserk_potion.png")',
                }}
              >
                <div
                  className="heropage_SubIcon"
                  style={{
                    backgroundImage:
                      'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/aghs_shard.png")',
                  }}
                />
              </div>
              <div
                onClick={() => setShowAblitiyButton(6)}
                className={`heropage_AbilitySelectable heropage_Scepter  ${
                  showAblitiyButton === 6 ? '' : 'heropage_NotSelected'
                }`}
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png")',
                }}
              >
                <div
                  className="heropage_SubIcon"
                  style={{
                    backgroundImage:
                      'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/aghs_scepter.png")',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right container        */}
          <div className="heropage_AbilityRight">
            <div className="heropage_AbilityInfoContainer">
              <div className="heropage_AbilityMain">
                <img
                  className="heropage_AbilityImage"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png"
                  alt=""
                />
                <div className="heropage_AbilityInfo">
                  <div className="heropage_AbilityName">Acid Spray</div>
                  <div className="heropage_AbilityDesc">
                    Sprays high-pressure acid across a target area. Enemy units who step across the
                    contaminated terrain take damage per second and have their armor reduced.
                  </div>
                </div>
              </div>

              <div className="heropage_AbilityDetails">
                <div className="heropage_GenericValues">
                  <div className="heropage_Column">
                    <div className="heropage_DetailsValues">
                      <div className="heropage_ValueElement">
                        Ability:<div className="heropage_ValueValue">Point Target</div>
                      </div>
                      <div className="heropage_ValueElement">
                        Damage Type:
                        <div className="heropage_ValueValue">
                          <span
                            style={{
                              color: 'rgb(255,0, 0)',
                            }}
                          >
                            Physical
                            <span />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heropage_Column">
                    <div className="heropage_DetailsValues">
                      <div className="heropage_ValueElement">
                        Pierces Spell Immunity:<div className="heropage_ValueValue">No</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heropage_SpecificValues">
                  <div className="heropage_SpecialElement">
                    RADIUS:<div className="heropage_SpecialValue">475 / 525 / 575 / 625</div>
                  </div>
                  <div className="heropage_SpecialElement">
                    DURATION:<div className="heropage_SpecialValue">16.0</div>
                  </div>
                  <div className="heropage_SpecialElement">
                    DAMAGE PER SECOND:
                    <div className="heropage_SpecialValue">20 / 25 / 30 / 35</div>
                  </div>
                  <div className="heropage_SpecialElement">
                    ARMOR REDUCTION:<div className="heropage_SpecialValue">4 / 5 / 6 / 7</div>
                  </div>
                </div>
                <div className="heropage_BottomValues">
                  <div className="heropage_CooldownContainer">
                    <div
                      className="heropage_CooldownIcon"
                      style={{
                        backgroundImage:
                          'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png")',
                      }}
                    />
                    <div className="heropage_CooldownText">22.0</div>
                  </div>
                  <div className="heropage_ManaContainer">
                    <div className="heropage_ManaIcon" />
                    <div className="heropage_ManaText">130 / 140 / 150 / 160</div>
                  </div>
                </div>
                <div className="heropage_Lore">
                  Using traditional Alchemy from the Darkbrew family, Razzil concocts an acid that
                  dissolves even the toughest metals.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="heropage_BottomSectionHero">
          <Link
            className="heropage_BottomSectionHero heropage_Left"
            to="/hero/abaddon"
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png")',
            }}
          >
            <img
              className="heropage_HeroPortrait"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/abaddon.png"
              alt=""
            />
            <div className="heropage_HeroLabels">
              <div className="heropage_TopHeader">Previous Hero</div>
              <div className="heropage_Name">Abaddon</div>
              <div className="heropage_Details">
                <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                  className="heropage_PrimaryStatIcon"
                  alt=""
                />
                <div className="heropage_AttackType">Melee</div>
              </div>
            </div>
          </Link>

          <Link className="heropage_AllHeroesContainer" to="/heroes">
            <div className="heropage_Boxes">
              <div className="heropage_Box" />
              <div className="heropage_Box" />
              <div className="heropage_Box" />
              <div className="heropage_Box" />
              <div className="heropage_Box" />
              <div className="heropage_Box" />
            </div>
            <div className="heropage_AllHeroesLabel">All Heroes </div>
          </Link>

          <Link
            className="heropage_BottomSectionHero heropage_Right"
            to="/hero/ancientapparition"
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png")',
            }}
          >
            <img
              className="heropage_HeroPortrait"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/ancient_apparition.png"
              alt=""
            />
            <div className="heropage_HeroLabels">
              <div className="heropage_TopHeader">Next Hero</div>
              <div className="heropage_Name">Ancient Apparition</div>
              <div className="heropage_Details">
                <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                  className="heropage_PrimaryStatIcon"
                  alt=""
                />
                <div className="heropage_AttackType">Ranged</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default SingleHero;

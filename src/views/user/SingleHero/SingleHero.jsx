import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Loader } from '../../../components';
import { getHeroDataSaga, resetHeroData } from '../../../store/actions';
import HeroAbilitySection from './HeroAbilitySection';
import HeroOverViewSection from './HeroOverviewSection';
import HeroStatsSection from './HeroStatsSection';
import './SingleHero.css';

const SingleHero = () => {
  const dispatch = useDispatch();
  const { heroName } = useParams();
  const { heroData, previousHeroName, nextHeroName } = useSelector(state => state.hero);

  useEffect(() => {
    dispatch(getHeroDataSaga({ heroName }));
    return () => dispatch(resetHeroData());
  }, [heroName]);

  return !heroData ? (
    <Loader />
  ) : (
    <>
      {/* ----------------Hero Overview------------- */}
      <HeroOverViewSection
        heroData={heroData}
        previousHeroName={previousHeroName}
        nextHeroName={nextHeroName}
      />

      {/* ----------------Hero Stats------------- */}
      <HeroStatsSection heroData={heroData} />

      {/* ----------------Heroes ability section---------------- */}
      <HeroAbilitySection
        previousHeroName={previousHeroName}
        nextHeroName={nextHeroName}
        heroName={heroName}
      />
    </>
  );
};
export default SingleHero;

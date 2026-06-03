import { RcCountryData } from '../defs';
import CountryLink from '../CountryLink';
import { RC_COUNTRIES } from '../data/rcCountries';
import { groupCountriesByRegion } from '../helpers';
import styles from './index.module.css';

const makeCountryList = (countryArray: RcCountryData[]) => {
    const countryList = countryArray
        .map((country => (
        <li key={`li-country-${country.cca3}`}>
            <CountryLink
                cca3={country.cca3}
            />
        </li>
    )), []);

    return (
        <ul className={styles.ul}>
            {countryList}
        </ul>
    );
}

const makeRegionalCountryList = (countryArray: RcCountryData[], regionName: string) => (
    <section key={`regionList-${regionName.replace(' ', '')}`} className={styles.regionSection}>
        <h3 className={styles.regionName}>{regionName}</h3>
        { makeCountryList(countryArray) }
    </section>
);

export const makeRegionalCountryLists = (countriesByRegion: Record<string, RcCountryData[]>) => {
    const countryLists = [];
    for (const [regionName, countryArray] of Object.entries(countriesByRegion)) {
        countryLists.push(makeRegionalCountryList(countryArray, regionName));
    }
    return countryLists;
}

const CountryList = () => {
    const countriesByRegion = groupCountriesByRegion(RC_COUNTRIES);
    const countryLists = makeRegionalCountryLists(countriesByRegion);

    return (
        <div className={styles.countryListsWrapper}>
            {countryLists}
        </div>
    );
};

export default CountryList;
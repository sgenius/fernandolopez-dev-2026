import WorldMap from "@/components/Countries/WorldMap";
import CountryList from "@/components/Countries/CountryList";
import { getTranslations } from "next-intl/server";
import styles from "./countriesIndex.module.css";

export default async function CountriesPage() {
  const t = await getTranslations("projects.countries");
  return (
    <>
      <header className={`block-wrapper ${styles.hero}`} id="countries-index-hero">
        <section className="section">
          <h1 className={`section-title ${styles.sectionTitle}`}>{t("title")}</h1>
          <p className={styles.titleSlug}>{t("slug")}</p>
        </section>
      </header>
      <div className={`block-wrapper ${styles.content}`} id="countries-index-content">
        <section className="section" id="intro">
          <p>{t("intro1")}</p>
          <p>{t("intro2")}</p>
        </section>
        <section className="section" id="country-list">
          <h2>{t("countryListTitle")}</h2>
          <WorldMap />
          <CountryList />
        </section>
      </div>
    </>
  );
}
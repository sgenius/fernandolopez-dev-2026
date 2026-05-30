import { getTranslations } from "next-intl/server";

export default async function CountriesPage() {
  const t = await getTranslations("countries");
  return (
    <div className="page-wrapper">
      <section className="section">
        <h1 className="section-title">{t("title")}</h1>
        <h2>{t("slug")}</h2>
      </section>
    </div>
  );
}
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fernando López",
};

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero-inner">
          <p className="hero-eyebrow" aria-hidden="true">fernandolopez.dev</p>
          <h1 id="hero-name">
            <span className="hero-name">{t("headline")}</span>
            <span className="hero-name-italic">López</span>
          </h1>
          <p className="hero-tagline">{t("tagline")}</p>
          <div style={{ marginTop: "var(--space-2xl)", display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Link href="/projects" className="btn btn-amber">
              {t("ctaProjects")}
            </Link>
            <Link href="/blog" className="btn btn-secondary" style={{ borderColor: "var(--b200)", color: "var(--b200)" }}>
              {t("ctaBlog")}
            </Link>
          </div>
        </div>
      </section>

      {/* Recent content */}
      <div className="page-wrapper">
        <section className="section" aria-labelledby="section-recent">
          <p className="section-label">01 · {t("recentLabel")}</p>
          <h2 className="section-title" id="section-recent">{t("recentTitle")}</h2>
          {/* Content cards will be populated dynamically */}
        </section>
      </div>
    </>
  );
}

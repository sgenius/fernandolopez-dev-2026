"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

interface NavProps {
  locale: Locale;
}

export function Nav({ locale }: NavProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const links = [
    { href: "/", label: t("home") },
    { href: "/blog", label: t("blog") },
    { href: "/projects", label: t("projects") },
    { href: "/about", label: t("about") },
  ];

  // Normalize pathname: strip locale prefix for comparison
  const localelessPath = pathname.replace(/^\/(es|pt)/, "") || "/";

  return (
    <header>
      <a href="#main-content" className="skip-link">
        {locale === "es" ? "Ir al contenido" : locale === "pt" ? "Ir para o conteúdo" : "Skip to content"}
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Fernando López — home">
            <span className="nav-logo-name">Fernando López</span>
            <span className="nav-logo-domain" aria-hidden="true">fernandolopez.dev</span>
          </Link>

          <ul className="nav-links" role="list">
            {links.map(({ href, label }) => {
              const isActive = href === "/" ? localelessPath === "/" : localelessPath.startsWith(href);
              return (
                <li key={href}>
                  <Link href={href} aria-current={isActive ? "page" : undefined}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <nav className="nav-locale" aria-label="Language switcher">
            {locales.map((l) => {
              const targetPath = l === "en"
                ? localelessPath
                : `/${l}${localelessPath === "/" ? "" : localelessPath}`;
              return (
                <Link key={l} href={targetPath} aria-current={l === locale ? "true" : undefined} lang={l}>
                  {l.toUpperCase()}
                </Link>
              );
            })}
          </nav>
        </div>
      </nav>
    </header>
  );
}

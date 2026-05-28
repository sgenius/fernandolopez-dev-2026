interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  const note =
    locale === "es"
      ? `© ${year} · Todos los derechos reservados`
      : locale === "pt"
      ? `© ${year} · Todos os direitos reservados`
      : `© ${year} · All rights reserved`;

  return (
    <footer className="site-footer" role="contentinfo">
      <div>
        <div className="footer-brand-name">Fernando López</div>
        <div className="footer-brand-domain">fernandolopez.dev</div>
      </div>
      <div className="footer-note">{note}</div>
    </footer>
  );
}

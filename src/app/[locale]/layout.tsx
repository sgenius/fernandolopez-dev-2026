import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { template: "%s | Fernando López", default: "Fernando López" },
  description: "Staff Engineer, Educator, and Builder. Engineering with purpose, always for the person.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale as Locale} />
          <main id="main-content">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

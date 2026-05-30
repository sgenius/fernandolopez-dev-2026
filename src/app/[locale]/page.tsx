import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fernando López",
};

export default function HomePage() {
  const t = useTranslations("home");
  const tPublications = useTranslations("publications");
  const tProjects = useTranslations("projects");
  const tContact = useTranslations("contact");

  const generateTagsOutput = (translator: (key: string) => string, path: string) => {
    return ["tag0", "tag1"].map((tagKey) => {
      try {
        const tagValue = translator(`${path}.${tagKey}`);
        return !tagValue.includes(path) ? 
        (
          <span className="tag tag-blue" key={tagKey}>
            {translator(`${path}.${tagKey}`)}
          </span>
        ) : null; 
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error fetching tag for path: ${path}.${tagKey} - ${error.message}`);
        }
        return null;
      }
    })
  };

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero-inner">
          <p className="hero-eyebrow" aria-hidden="true">fernandolopez.dev</p>
          <h1 id="hero-name">
            <span className="hero-name">{t("headline")}</span>
            <span className="hero-name-italic">L&oacute;pez</span>
          </h1>
          <p className="hero-tagline">{t("tagline")}</p>
          <div className="hero-cta">
            <Link href="/#contact" className="btn btn-amber">
              {tContact("title")}
            </Link>
          </div>
        </div>
      </section>

      {/* About Me */}
      <div className="block-wrapper" id="block-wrapper-aboutme">
        <section className="section" aria-labelledby="section-aboutme">
          <h2 className="section-title" id="section-aboutme">{t("bioTitle1")}<br /><span className="section-title-italic">{t("bioTitle2")}</span></h2>
          <Image src="/images/profile.jpg" alt={t("profileImageAlt")} width={200} height={200} className="profile-image" />
          <p>{t("shortBio1")}</p>
          <p>{t("shortBio2")}</p>
          <p>{t("shortBio3")}</p>
        </section>
      </div>

      {/* Projects */}
      <div className="block-wrapper">
        <section className="section" aria-labelledby="section-projects">
          <h2 className="section-title" id="section-projects">{tProjects("title")}</h2>
          <p className="section-description">{tProjects("slug")}</p>
          <div className="cards">
            {
              ["countries", "mosaic", "tapestry"].map((projectKey) => (
                <Link href={tProjects(`${projectKey}.url`)} className="card" key={projectKey}>
                  <header className="card-header">
                    <h3 className="card-header-title">{tProjects(`${projectKey}.title`)}</h3>
                  </header>
                  <div className="card-body">
                    <p className="card-description">{tProjects(`${projectKey}.slug`)}</p>
                    <hr className="card-divider" />
                    <section className={`card-description-lower external-link-${projectKey === "tapestry" ? "external" : "internal"}`}>
                      {projectKey === "tapestry" ? tProjects("visitProject") : tProjects("viewProject")}{` `}
                      {projectKey === "tapestry" ? <span className="boxicons--arrow-out-up-right-square svg-icon-sm"></span> : null}
                    </section>
                    <section className="tags">
                      {generateTagsOutput(tProjects, projectKey)}
                    </section>
                  </div>
                </Link>
              ))
            }
          </div>
        </section>
      </div>

      {/* Publications */}
      <div className="block-wrapper">
        <section className="section" aria-labelledby="section-publications">
          <header className="section-publications-header">
            <h2 className="section-title" id="section-publications">{tPublications("title")}</h2>
            <p className="section-description">{tPublications("slug")}</p>
          </header>
          <div className="cards">
            {["0", "1", "2"].map((key) => (
              <Link href={tPublications(`pubs.${key}.url`)} target="_blank" rel="noopener noreferrer" key={key} className="card">
                <header className="card-header">
                  <h3 className="card-header-title">{tPublications(`pubs.${key}.title`)}</h3>
                </header>
                <div className="card-body card-icon-content-cols">
                  <div className="card-col">
                    <span className={`publication-type-icon publication-type-${tPublications(`pubs.${key}.type`)}`}>
                      {tPublications(`pubs.${key}.type`) === "video" ? (
                        <span className="mingcute--video-fill svg-icon-lg"></span>
                      ) : (
                        <span className="boxicons--book-open svg-icon-lg"></span>
                      )}
                    </span>
                  </div>
                  <div className="card-col">
                    <p className="card-description">{tPublications(`pubs.${key}.slug`)}</p>
                    <hr className="card-divider" />
                    <section className={`card-description-lower external-link-${tPublications(`pubs.${key}.type`)}`}>
                      {tPublications(`pubs.${key}.type`) === "video" ? tPublications("watchVideo") : tPublications("readMore")}{` `}
                      <span className="boxicons--arrow-out-up-right-square svg-icon-sm"></span>
                    </section>
                    <section className="tags">
                      {generateTagsOutput(tPublications, `pubs.${key}`)}
                    </section>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Contact */}
      <span id="contact" className="anchor"></span>
      <div className="block-wrapper" id="block-wrapper-contact">
        <section className="section" id="section-contact">
          <div className="col">
            <h2 className="section-title" id="section-contact-title">{tContact("title")}</h2>
            <p className="contact-intro" id="contact-intro1">{tContact("intro1")}</p>
            <p className="contact-intro" id="contact-intro2">{tContact("intro2")}</p>
          </div>
          <div className="col">
            <ul>
              <li className="contact-item contact-linkedin">
                <a href="https://www.linkedin.com/in/fernando-a-lopez-p" target="_blank" rel="noopener noreferrer">
                  <span className="bxl--linkedin svg-icon-lg"></span>
                  <span className="contact-link-text">linkedin.com/in/fernando-a-lopez-p</span>
                </a>
              </li>
              <li className="contact-item contact-github">
                <a href="https://www.github.com/sgenius" target="_blank" rel="noopener noreferrer">
                  <span className="bxl--github svg-icon-lg"></span>
                  <span className="contact-link-text">github.com/sgenius</span>
                </a>
              </li>
              <li className="contact-item contact-calendly">
                <a href="https://calendly.com/fa-lopez/30min" target="_blank" rel="noopener noreferrer" className="contact-calendly-link">
                  <span className="boxicons--calendar svg-icon-lg"></span>
                  <span className="contact-link-text">{tContact("consultation")}</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

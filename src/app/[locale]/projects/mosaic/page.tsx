import { getTranslations } from "next-intl/server";

export default async function MosaicPage() {
  const t = await getTranslations("projects.mosaic");
  return (
    <>
        <p>mosaic placeholder</p>
    </>
  );
}
import { headers } from "next/headers";
import type { Metadata } from "next";

const title = {
  en: "Portfolio | Onzur Media Studio – Featured Work & Real Analytics",
  ar: "معرض الأعمال | أونزر ميديا ستوديو – أعمال مميزة ونتائج حقيقية",
};

const description = {
  en: "Explore Onzur Media Studio's portfolio: viral TikTok campaigns, professional photography, web projects, and social media success stories across Qatar.",
  ar: "استعرض محفظة أونزر ميديا ستوديو: حملات تيك توك فيروسية، تصوير احترافي، مشاريع ويب، وقصص نجاح على وسائل التواصل الاجتماعي في قطر.",
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const lang = (headersList.get("x-language") ?? "en") as "en" | "ar";

  return {
    title: title[lang],
    description: description[lang],
    openGraph: {
      title: title[lang],
      description: description[lang],
      locale: lang === "ar" ? "ar_QA" : "en_US",
    },
    twitter: {
      title: title[lang],
      description: description[lang],
    },
  };
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

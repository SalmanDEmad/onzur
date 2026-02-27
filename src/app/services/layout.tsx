import { headers } from "next/headers";
import type { Metadata } from "next";

const title = {
  en: "Our Services | Onzur Media Studio – Qatar's Leading Digital Agency",
  ar: "خدماتنا | أونزر ميديا ستوديو – وكالة التسويق الرقمي الرائدة في قطر",
};

const description = {
  en: "Web development, viral content creation, social media management, and high-ROI paid advertising services for businesses in Qatar and beyond.",
  ar: "خدمات تطوير المواقع، إنشاء محتوى فيروسي، إدارة وسائل التواصل الاجتماعي، والإعلانات المدفوعة عالية العائد للشركات في قطر.",
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

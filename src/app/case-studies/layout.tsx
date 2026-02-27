import { headers } from "next/headers";
import type { Metadata } from "next";

const title = {
  en: "Case Studies | Onzur Media Studio – Real Client Success Stories",
  ar: "دراسات الحالة | أونزر ميديا ستوديو – قصص نجاح حقيقية",
};

const description = {
  en: "Discover real results: 8M+ TikTok views, 40-50 daily leads, and successful platform integrations. See how Onzur Media Studio transforms businesses in Qatar.",
  ar: "اكتشف نتائج حقيقية: أكثر من 8 ملايين مشاهدة على تيك توك، 40-50 عميل يومياً، وتكاملات ناجحة مع المنصات. شاهد كيف يحوّل أونزر ميديا ستوديو الأعمال في قطر.",
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

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

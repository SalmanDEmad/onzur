import { headers } from "next/headers";
import type { Metadata } from "next";

const title = {
  en: "Client Testimonials | Onzur Media Studio – What Our Clients Say",
  ar: "آراء العملاء | أونزر ميديا ستوديو – ماذا يقول عملاؤنا",
};

const description = {
  en: "Read genuine testimonials from Onzur Media Studio clients. Rated 4.9/5 on DesignRush with 38 verified reviews. Real results from businesses across Qatar.",
  ar: "اقرأ آراء حقيقية من عملاء أونزر ميديا ستوديو. تقييم 4.9/5 على DesignRush مع 38 مراجعة موثقة. نتائج حقيقية من شركات قطر.",
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

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

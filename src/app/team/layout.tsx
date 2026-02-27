import { headers } from "next/headers";
import type { Metadata } from "next";

const title = {
  en: "Our Team | Onzur Media Studio – Meet the Creative Minds",
  ar: "فريقنا | أونزر ميديا ستوديو – تعرف على العقول الإبداعية",
};

const description = {
  en: "Meet the talented team behind Onzur Media Studio: award-winning creative directors, videographers, and content editors driving viral success in Qatar.",
  ar: "تعرف على الفريق الموهوب وراء أونزر ميديا ستوديو: مدراء إبداعيون حائزون على جوائز، ومصورون، ومحررو محتوى يحققون نجاحاً فيروسياً في قطر.",
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

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

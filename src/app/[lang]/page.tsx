import { Metadata } from "next";
import HomePage from "@/components/HomePage";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "pt-BR" ? "Raniery | Portfólio" : "Raniery | Portfolio",
  };
}

export default async function Page({ params }: Props) {
  await params;
  return <HomePage />;
}

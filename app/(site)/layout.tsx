import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { getSiteSettings } from "@/lib/sanity/fetch";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar settings={settings} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
      <WhatsAppButton whatsapp={settings.whatsapp} />
    </>
  );
}

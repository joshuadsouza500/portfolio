import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/ui/NavBar";
import Initial from "./components/Initial";
import { LoaderProvider } from "./utils/LoaderContext";
import FooterSelector from "./components/sections/CTA";

export const metadata: Metadata = {
  title: {
    template: "%s | Joshua Dsouza",
    default: "Joshua Dsouza",
  },
  description:
    "Hey, I am Joshua, a Web developer with a passion for creating dynamic and responsive websites that enhance user experience. Based in bahrain  ",
  verification: {
    google: "m3YkuK-Y4S-R_8lvq_jMpg2khDcoUQJKPe0TmD0r9ms",
  },
  keywords: [
    "Web development, freelance web developer , bahrain, front-end development, freelance, SEO, Web design, Reactjs",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Joshua Dsouza",
    description:
      "Hey, I am Joshua, a Web developer with a passion for creating dynamic and responsive websites that enhance user experience. Based in bahrain.",
    images: "/OpenGraph2.jpeg",
  },
  twitter: {
    title: "Joshua Dsouza",
    description:
      "Hey, I am Joshua, a Web developer with a passion for creating dynamic and responsive websites that enhance user experience. Based in bahrain.",
    images: "/OpenGraph2.jpeg",
  },

  metadataBase: new URL("https://joshuads.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="m3YkuK-Y4S-R_8lvq_jMpg2khDcoUQJKPe0TmD0r9ms"
      />
      <meta name="twitter:image" content="/OpenGraph2.jpeg" />
      <meta name="author" content="Joshua Dsouza" />
      <meta name="application-name" content="Joshua Dsouza Portfolio" />
      <link rel="icon" href="/Logo.svg" />
      <body className="bg-backgroundw font-Manrope">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <LoaderProvider>
          <Initial />
          <NavBar />
          {children}
          <FooterSelector />
        </LoaderProvider>
      </body>
    </html>
  );
}

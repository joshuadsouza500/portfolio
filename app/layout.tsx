import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/ui/NavBar";
import { Footer } from "./components/ui/Footer";
import Initial from "./components/Initial";
import { LoaderProvider } from "./utils/LoaderContext";

export const metadata: Metadata = {
  title: {
    template: "%s | Joshua Dsouza",
    default: "Joshua Dsouza",
  },
  description: "Hey, I am Joshua, a Web developer based in bahrain.",
  verification: {
    google: "m3YkuK-Y4S-R_8lvq_jMpg2khDcoUQJKPe0TmD0r9ms",
  },
  keywords: [
    "Web development, portfolio, bahrain, portfolio website, animations, front-end development, freelance, SEO, Web design, Reactjs",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Joshua Dsouza",
    description: "Hey, I am Joshua, a Web developer based in bahrain.",
    images: "/OpenGraph.jpeg", // Add your Open Graph image URL here
  },
  twitter: {
    title: "Joshua Dsouza",
    description: "Hey, I am Joshua, a Web developer based in bahrain.",
    images: "/OpenGraph.jpeg", // Add your Twitter image URL here
  },

  metadataBase: new URL("https://joshuads.vercel.app"),
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
      <link rel="icon" href="/Logo.svg" />
      <body className="bg-backgroundw font-Manrope">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <LoaderProvider>
          {/***/}
          <Initial />
          <NavBar />
          {children}
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}

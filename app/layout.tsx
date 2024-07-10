import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/ui/NavBar";
import { Footer } from "./components/ui/Footer";
import Initial from "./components/Initial";

export const metadata: Metadata = {
  title: {
    template: "%s | Joshua Dsouza",
    default: "Joshua Dsouza",
  },
  description: "Hey, I am Joshua, a Web developer based in bahrain.",
  keywords:
    "Web development, portfolio, bahrain, portfolio website, animations, front-end development, freelance, SEO, Web design, Reactjs",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Joshua Dsouza",
    description: "Hey, I am Joshua, a Web developer based in bahrain.",
  },
  twitter: {
    title: "Joshua Dsouza",
    description: "Hey, I am Joshua, a Web developer based in bahrain.",
  },
  metadataBase: new URL("https://joshuads.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    /**
    <meta
        name="google-site-verification"
        content="m3YkuK-Y4S-R_8lvq_jMpg2khDcoUQJKPe0TmD0r9ms"
      />
      
      add under html*/
  }
  {
    /**
    verification: {
      google: "m3YkuK-Y4S-R_8lvq_jMpg2khDcoUQJKPe0TmD0r9ms",
    }, 
    
  
    */
  }

  return (
    <html lang="en">
      <link rel="icon" href="/Logo.svg" />
      <body className="bg-backgroundw font-poppins">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <Initial />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

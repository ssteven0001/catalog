import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Lexend_Deca } from "next/font/google";
import "@/styles/globals.css";

const font = Lexend_Deca({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${font.style.fontFamily};
        }
      `}</style>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

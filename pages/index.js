import Head from "next/head";
import MyWork from "../components/lyout/MyWork";
import Navbar from "../components/lyout/Navbar";
import Welcome from "../components/lyout/Welcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paweł Przetacznik</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar />
      <Welcome />
      <MyWork />
    </div>
  );
}

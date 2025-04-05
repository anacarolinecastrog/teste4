import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Typebot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <iframe
        src="https://viewer.typebot.io/my-typebot-v7urwma?hide-footer=true"
        allow="clipboard-write; microphone; camera"
        width="100%"
        height="100%"
        style={{ border: "none", position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
      ></iframe>
    </>
  );
}
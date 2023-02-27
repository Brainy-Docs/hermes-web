import Head from "next/head";

export default function Index({ title = "" }) {
  return (
    <Head>
      <title> {`${title} | Hermes`} </title>
    </Head>
  );
}

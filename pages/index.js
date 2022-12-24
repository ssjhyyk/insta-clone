import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Insta Clone</title>
      </Head>
      <div>
        <Header />
      </div>
    </div>
    
  )
}
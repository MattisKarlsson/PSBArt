import Head from "next/head";
import { Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PSB Art</title>
        <meta name="keywords" content="Art" />
      </Head>
      <Heading>PSBArt</Heading>
    </div>
  );
}

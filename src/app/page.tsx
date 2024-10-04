import { headers } from "next/headers";
import fetchMetadata from "./_actions/fetchMetadata";
import { DataInterface } from "./bots/page";
import { detectBot } from "./utils/botUtils";
import dynamic from "next/dynamic";


const HomePage = dynamic( () => import("./bots/page"), {
  ssr: true,
});


export default async function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isBotDetected = detectBot(userAgent);

  let initialMetadata: DataInterface | null = null;
  // if (isBotDetected) {
    initialMetadata = await fetchMetadata({
      userAgent,
      page: "/",
      isBot: isBotDetected,
    });
  // }

  return (
    <HomePage
      userAgent={userAgent}
      initialMetadata={initialMetadata}
      isBotDetected={isBotDetected}
    />
  );
}

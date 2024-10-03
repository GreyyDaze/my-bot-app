"use server";

import { DataInterface } from "../bots/page";

export interface Payload {
  userAgent: string;
  page: string;
  isBot: boolean;
}

const fetchMetadata = async ({
  userAgent,
  page,
  isBot,
}: Payload): Promise<DataInterface | null> => {
  const response = await fetch("http://localhost:3000/api/bot-visit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userAgent, page, isBot }),
  });

  const data = await response.json();
  return data;
};

export default fetchMetadata;

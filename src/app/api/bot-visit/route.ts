import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userAgent, isBot, page } = await req.json();

  // Log visit information
  console.log("Visit detected!");
  console.log(`User-Agent: ${userAgent}`);
  console.log(`Visited Page: ${page}`);

  // Customize server message based on isBot status
  const message = isBot
    ? "Bot visit logged successfully!"
    : "Human visit logged successfully!";

  // Send a response back
  return NextResponse.json({ message }, { status: 200 });
}

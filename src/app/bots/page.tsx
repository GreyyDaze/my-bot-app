"use client";
import React, { useEffect, useState } from "react";
import fetchMetadata from "../_actions/fetchMetadata";
import ClientComponent from "../components/ClientComponent";

export interface DataInterface {
  message: string;
}

interface HomePageProps {
  initialMetadata: DataInterface | null;
  userAgent: string;
  isBotDetected: boolean;
}

const HomePage: React.FC<HomePageProps> = ({
  initialMetadata,
  userAgent,
  isBotDetected,
}) => {
    
//   const [metadata, setMetadata] = useState<DataInterface | null>(initialMetadata);
  

//   useEffect(() => {
//     if (!isBotDetected && !metadata) {
//       fetchMetadata({
//         userAgent,
//         page: "/",
//         isBot: isBotDetected,
//       }).then(setMetadata);
//     }
//   }, [userAgent, isBotDetected, metadata]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the E-commerce Store</h1>
      {userAgent && <p className="text-lg mb-2">Your User-Agent is: {userAgent}</p>}
      <div>
        <p className={`font-semibold ${isBotDetected ? 'text-red-500' : 'text-green-500'}`}>
          {isBotDetected ? 'Hello, Bot!' : 'Welcome, Human!'}
        </p>
        {initialMetadata && (
          <>
            <p className="text-blue-500 font-semibold">{initialMetadata.message}</p>
            <p className="text-blue-500 font-semibold">{JSON.stringify(initialMetadata)}</p>
          </>
        )}
      </div>
      <ClientComponent initialMessage="This content is important and visible to bots." />
    </div>
  );
};

export default HomePage;
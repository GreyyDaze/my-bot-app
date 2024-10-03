"use client";
import { useEffect, useState } from "react";

interface ClientComponentProps {
  initialMessage: string;
}

const ClientComponent: React.FC<ClientComponentProps> = ({
  initialMessage,
}) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    setMessage("This content is rendered by the client component.");
  }, []);

  const handleButtonClick = () => {
    setMessage("You clicked the button! The content has changed.");
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-2">Client-Side Component</h2>
      <p className="mb-4">{message}</p>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Change Content
      </button>
      <div className="mt-4">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Visit Google
        </a>
      </div>
    </div>
  );
};

export default ClientComponent;

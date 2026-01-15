"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as Sentry from "@sentry/nextjs";
import { useAuth } from "@clerk/nextjs";

// 1.  Client Error

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBackground, setIsLoadingBackground] = useState(false);
  const { userId } = useAuth();

  const handleClientError = () => {
    Sentry.logger.info("User attempting to ciick on client function", {
      userId,
    });
    throw new Error("Client Error : Something went wrong in the browser");
  };

  // 2. API Error - triggers server-side error

  const handleApiError = async () => {
    await fetch("/api/demo/error", {
      method: "POST",
    });
  };
  // 3. Inngest Error = triggers error in background job

  const handleInngestError = async () => {
    await fetch("/api/demo/inngest-error", {
      method: "POST",
    });
  };

  const handleBlocking = async () => {
    setIsLoading(true);
    const response = await fetch("/api/demo/blocking", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
  };

  const handleBackground = async () => {
    setIsLoading(true);
    const response = await fetch("/api/demo/background", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
  };
  return (
    <div className="p-8 space-x-4">
      <Button onClick={handleBlocking} disabled={isLoading}>
        {isLoading ? "Loading..." : "Blocking"}
      </Button>

      <Button onClick={handleBackground} disabled={isLoadingBackground}>
        {isLoadingBackground ? "Loading..." : "Background"}
      </Button>

      <Button onClick={handleClientError} variant={"destructive"}>
        Client Error
      </Button>
      <Button onClick={handleApiError} variant={"destructive"}>
        API Error
      </Button>
      <Button onClick={handleInngestError} variant={"destructive"}>
        Inngest Error
      </Button>
    </div>
  );
};

export default page;

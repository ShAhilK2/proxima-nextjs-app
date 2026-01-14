"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBackground, setIsLoadingBackground] = useState(false);

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
    </div>
  );
};

export default page;

"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ hello: string } | null>(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main>
      <h1>{data ? "Starnoh learning here : " + data.hello : "Loading..."}</h1>
    </main>
  );
}
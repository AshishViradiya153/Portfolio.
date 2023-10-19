"use client";

import MainContainer from "@/components/mainContainer/MainContainer";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkIfPageIsFullyLoaded = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };

    checkIfPageIsFullyLoaded();

    window.addEventListener("load", checkIfPageIsFullyLoaded);

    return () => {
      window.removeEventListener("load", checkIfPageIsFullyLoaded);
    };
  }, []);

  return <>{loading ? <Loader /> : <MainContainer />}</>;
}

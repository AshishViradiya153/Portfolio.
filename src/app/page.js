"use client";

import MainContainer from "@/components/mainContainer/MainContainer";
import RootLayout from "./layout";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

export default function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);
  return <>{loading ? <Loader /> : <MainContainer />}</>;
}

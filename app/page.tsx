"use client";

import Head from "next/head";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span style={{ color: "#4285F4" }}>We</span>
          <span style={{ color: "#DB4437" }}>a</span>
          <span style={{ color: "#F4B400" }}>th</span>
          <span style={{ color: "#4285F4" }}>er</span>
          <span> </span>
          <span style={{ color: "#0F9D58" }}>A</span>
          <span style={{ color: "#DB4437" }}>p</span>
          <span style={{ color: "#DB4437" }}>p</span>
        </h1>
        <SearchBar />
      </main>
    </div>
  );
}

import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="background_color flex w-screen h-screen items-center justify-center">
      <div className="border-2 p-6 rounded-md shadow-2xl hover:scale-110">
        <p className="text-white text-lg">
          <span className="text-5xl font-bold">T</span>hank You...
        </p>
        <p>
          Back To{" "}
          <Link href="/" className="">
            <span className="underline font-medium ">Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;

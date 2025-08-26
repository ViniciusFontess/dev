"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-48 animate-pulse bg-gray-300 rounded"></div>
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!isClient) {
    return <div className="w-full h-48 animate-pulse bg-gray-300 rounded"></div>;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
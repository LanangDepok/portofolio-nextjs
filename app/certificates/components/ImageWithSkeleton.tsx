"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export default function ImageWithSkeleton({
  imageName,
  imageAlt,
}: {
  imageName: StaticImageData | string;
  imageAlt: string;
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      {isLoading && <Skeleton className="rounded-none w-full h-[600px]" />}
      <Image
        src={imageName}
        alt={imageAlt}
        className={isLoading ? "hidden" : ""}
        onLoadingComplete={() => setLoading(false)}
      ></Image>
    </>
  );
}

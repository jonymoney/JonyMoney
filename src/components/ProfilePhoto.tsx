"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfilePhotoProps {
  src?: string;
  alt: string;
  initials?: string;
  size?: number;
}

export function ProfilePhoto({
  src,
  alt,
  initials = "JV",
  size = 128,
}: ProfilePhotoProps) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div
        className="flex items-center justify-center rounded-full bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
        style={{ width: size, height: size, fontSize: size * 0.35 }}
      >
        <span className="font-semibold">{initials}</span>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
}

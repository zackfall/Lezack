import NextImage from "next/image";
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill: boolean;
  aspectRatio?: number;
}

export default function Image({
  src,
  alt,
  className,
  fill,
  width = 300,
  height = 300,
  aspectRatio = 16 / 9,
}: ImageProps) {
  const [ratio, setRatio] = useState(aspectRatio);
  const image = fill ? (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      fill
      loading="eager"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  ) : (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height / ratio}
      loading="eager"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  );
  return image;
}

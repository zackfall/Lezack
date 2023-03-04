import NextImage from "next/image";
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  fill: boolean;
  aspectRatio?: number
}

export default function Image({src, alt, className, width, height, fill, aspectRatio = 16/9}: ImageProps) {
  const [ratio, setRatio] = useState(aspectRatio);
  const image = fill
  ? <NextImage
      src={src}
      alt={alt}
      className={className}
      fill
      onLoadingComplete={
        ({ naturalWidth, naturalHeight}) => setRatio(naturalWidth / naturalHeight)
      }
    />
  : <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height / ratio}
      onLoadingComplete={
        ({ naturalWidth, naturalHeight }) => setRatio(naturalWidth / naturalHeight)
      }
    />;
  return image;
}

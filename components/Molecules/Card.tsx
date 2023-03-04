import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  name: string;
  imgSrc: string;
  actualKin: string;
  color: string;
  children: ReactNode;
}

export default function Card({name, imgSrc, actualKin, color, children}: CardProps) {
  return (
  <div className="shadow-lg w-full rounded-lg p-1 mt-10 bg-gradient-to-r from-green-700 to-orange-800">
    <div className="text-gray-600 rounded-lg w-full p-5 flex flex-col text-center lg:text-left lg:flex-row gap-5 items-center bg-gray-50">
      <Image src={imgSrc} alt="Kins picture" width="200" height="200" className="h-auto w-auto rounded-full filter hue-rotate-30 drop-shadow-lg" />
      <div className="flex flex-col gap-4">
        <h3 className={`text-xl text-${color} font-medium`}>{name}</h3>
        <p>{children}</p>
        <p>Actual kinnie: <span className={`text-${color}`}>{actualKin}</span></p>
      </div>
    </div>
  </div>
  );
}

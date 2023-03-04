import { IconCircleFilled } from "@tabler/icons-react";

export default function Topi({color, children}: {color: string, children: React.ReactNode}) {
  return (
    <><IconCircleFilled className={color} /> <span className={color}>{children}</span></>
  );
}

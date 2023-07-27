import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

interface NoSRRProps {
  children: ReactNode;
}

const NoSSRWrapper = (props: NoSRRProps) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSSRWrapper), { ssr: false });

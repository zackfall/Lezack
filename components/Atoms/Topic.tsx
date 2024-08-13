import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Topic({ className, children }: { className: string, children: React.ReactNode }) {
  return (
    <>
      <FontAwesomeIcon className={`mr-1 ${className}`} icon={faCircle} /> <span className={className}>{children} </span><br/>
    </>
  );
}

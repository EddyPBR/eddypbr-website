import { useState } from "react";

import { FaFacebookF, FaTwitter, FaShareAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { FiCopy } from "react-icons/fi";

import { Share, Button } from "./styles";

type ShareButtonProps = {
  facebook?: string;
  twitter?: string;
  copyUrl?: string;
}

export function ShareButton({ facebook, twitter, copyUrl }: ShareButtonProps) {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
    
  if(!facebook || !twitter || !copyUrl) {
    return(<></>);
  }

  return(
    <>
      <Share showShareLinks={isActive}>
        <a href="#">
          <FiCopy />
        </a>

        <a href="#">
          <FaTwitter />
        </a>

        <a href="#">
          <FaFacebookF />
        </a>
      </Share>

      <Button onClick={() => setIsActive(!isActive)} isActive={isActive}>
        {
          isActive ? <CgClose /> : <FaShareAlt />
        }
      </Button>
    </>
  )
}

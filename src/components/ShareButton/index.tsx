import { useState, MouseEvent } from "react";

import { FaFacebookF, FaTwitter, FaShareAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { FiCopy } from "react-icons/fi";

import { Share, Button } from "./styles";

type ShareButtonProps = {
  facebook?: boolean;
  twitter?: boolean;
  copyUrl?: boolean;
}

export function ShareButton({ facebook, twitter, copyUrl }: ShareButtonProps) {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
  const [copied, setCopied] = useState(false);

  function copyActualUrl(event: MouseEvent) {
    event.preventDefault();

    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl);

    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  }

  function shareOnFacebook(event: MouseEvent) {
    event.preventDefault();

    const currentUrl = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

    window.open(facebookShareUrl, "facebook-share", "width=520, height=320");
  }

  function shareOnTwitter(event: MouseEvent) {
    event.preventDefault();

    const currentUrl = window.location.href;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}`;

    window.open(twitterShareUrl, "twitter-share", "width=520, height=320");
  }
    
  if(!facebook && !twitter && !copyUrl) {
    return(<></>);
  }

  return(
    <>
      <Share showShareLinks={isActive} copied={copied}>
        <a href="#copy-to-clipboard" onClick={(event) => copyActualUrl(event)}>
          <FiCopy />
        </a>

        <a href="#share-twitter" onClick={(event) => shareOnTwitter(event)}>
          <FaTwitter />
        </a>

        <a href="#share-facebook" onClick={(event) => shareOnFacebook(event)}>
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

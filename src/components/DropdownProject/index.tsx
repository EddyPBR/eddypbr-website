import { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";

import { Project } from "./styles";

type DropdownProjectProps = {
  title: string;
  category: string;
  imageUrl: string;
  text: string;
  dropped?: boolean;
  handleFunction?: () => void;
}

export function DropdownProject({ title, category, imageUrl, text, dropped, handleFunction }: DropdownProjectProps) {
  const [isDropped, setIsDropped] = useState(false);

  useEffect(() => {
    setIsDropped(dropped);
  }, [dropped])

  return(
    <Project isDropped={isDropped} onClick={handleFunction ? handleFunction : () => setIsDropped(!isDropped)}>
      <header>
        <div>
          <img src={imageUrl} alt={`${title} - por EddyPBR`} />
          <div>
            <strong>{title}</strong>
            <span>{category}</span>
          </div>
        </div>
        <button type="button">
          <MdArrowDropDown />
        </button>
      </header>
      <p>{text}</p>
    </Project>
  );
}

import { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";

import { Project } from "./styles";

type DropdownProjectProps = {
  title: string;
  categories: string[];
  imageUrl: string;
  text: string;
  dropped?: boolean;
  handleFunction?: () => void;
}

export function DropdownProject({ title, categories, imageUrl, text, dropped, handleFunction }: DropdownProjectProps) {
  const [isDropped, setIsDropped] = useState(false);
  const category = categories.join(" | ");

  useEffect(() => {
    setIsDropped(dropped);
  }, [dropped])

  return(
    <Project isDropped={isDropped} onClick={handleFunction ? handleFunction : () => setIsDropped(!isDropped)}>
      <header>
        <div>
          <img src={imageUrl} alt={`${title} - por EddyPBR`} width={74} height={74} />
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

import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

import { Project } from "./styles";

type DropdownProjectProps = {
  title: string;
  category: string;
  imageUrl: string;
  text: string;
}

export function DropdownProject({ title, category, imageUrl, text }: DropdownProjectProps) {
  const [isDropped, setIsDropped] = useState(false);

  return(
    <Project isDropped={isDropped}>
      <header>
        <div>
          <img src={imageUrl} alt={`${title} - por EddyPBR`} />
          <div>
            <strong>{title}</strong>
            <span>{category}</span>
          </div>
        </div>
        <button type="button" onClick={() => setIsDropped(!isDropped)}>
          <MdArrowDropDown />
        </button>
      </header>
      <p>{text}</p>
    </Project>
  );
}

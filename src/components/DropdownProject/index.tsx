import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

import { Project } from "./styles";

type DropdownProjectProps = {
  title: string;
  category: string;
  imageUrl: string;
  text: string;
  dropped?: boolean;
}

export function DropdownProject({ title, category, imageUrl, text, dropped }: DropdownProjectProps) {
  const [isDropped, setIsDropped] = useState(dropped);

  return(
    <Project isDropped={isDropped} onClick={() => setIsDropped(!isDropped)}>
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

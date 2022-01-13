import React from "react";

import searchImg from "../../assets/search.svg";
import { Label } from "./styles";

type PropsInputSearch = {
  onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}

export const InputSearch = (props:PropsInputSearch) => {
  return (
    <Label>
      <img src={searchImg} alt="search" />
      <input type="text" onChange={props.onChange}/>
    </Label>
  );
};

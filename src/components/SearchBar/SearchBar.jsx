import React from "react";
import cls from "./SearchBar.module.scss";

import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

import loupe from "../../assets/searchIcon.png";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch()

  const testDebounce = React.useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value))
    }, 1000),
    []
  );
  const onChangeInput = (element) => {
    setValue(element.target.value);
    testDebounce(element.target.value);
  };

  return (
    <div className={cls.searchBar}>
      <input
        value={value}
        onChange={onChangeInput}
        className={cls.input}
        placeholder="Find your book..."
      />
      <img src={loupe} alt="searchIcon" />
    </div>
  );
};

export default SearchBar;

import React from "react";
import Header from "../components/Header";
import BookItem from "../components/BookItem.jsx/BookItem";

import { useSelector, useDispatch } from "react-redux";
import { selectSort, setFilters } from "../redux/slices/filterSlice";
import { sorting } from "../components/Sort";
import Skeleton from "../components/BookItem.jsx/Skeleton";
import qs from "qs";
import { fetchBooks, selectedBook } from "../redux/slices/bookSlice";

const Home = () => {
  const { categoryType, sort, searchValue, categoryName } =
    useSelector(selectSort);
  const { items, status } = useSelector(selectedBook);
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
console.log(items)
  const getBooks = async () => {
    const search = searchValue ? searchValue : "";
    const category = categoryType ? categoryType : "";
    dispatch(
      fetchBooks({
        search,
        category,
        sort,
      })
    );
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sorting.find((el) => el.sortType === params.sortType);
      dispatch(setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);
  React.useEffect(() => {
    window.scrollTo(0, 0)
    getBooks()
    isSearch.current = false
}, [categoryType, sort.sortType, searchValue]);
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortType: sort.sortType,
  //       categoryType,
  //     });
  //   }
  //   isMounted.current = true;
  // }, [categoryType, sort.sortType, searchValue]);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div>
      <Header />
      <div className="item-container">
        {status === "error" ? (
          <div>
            <h2>Something went wrong</h2>
            <p>You can reboot your computer or come to Library</p>
          </div>
        ) : (
          <div className="content-items">
            {status === "loading" ? skeleton: <BookItem book={items} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

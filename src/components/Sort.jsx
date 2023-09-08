import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSort, setSortType } from "../redux/slices/filterSlice";

export const sorting = [
  { name: "Choose", sortType: "" },
  { name: "Relevance", sortType: "&orderBy=relevance" },
  { name: "Newest", sortType: "&orderBy=newest" },
];

const Sort = () => {
  const {sort} = useSelector(selectSort)
  const dispatch = useDispatch()
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const sortRef = React.useRef();
  const selected = (item) => {
    dispatch(setSortType(item))
    setIsOpenPopup(false);
  };

  React.useEffect(() => {
    const handlerClosePopUp = (event ) => {
      const _event = event
      
      if(sortRef.current &&  _event && _event.path && _event.path.includes(sortRef.current)) {
        setIsOpenPopup(false)
      }
    }
    document.body.addEventListener('click', handlerClosePopUp)

    return () => {
      document.body.removeEventListener('click', handlerClosePopUp)
    }

    
  }, [])

  return (
    <div className="sort">
      <div ref={sortRef} className="sort__label">
        <b>Sorting:</b>
        <span onClick={() => setIsOpenPopup(!isOpenPopup)}>{sort.name}</span>
      </div>
      {isOpenPopup && (
        <div className="sort__popup">
          <ul>
            {sorting.map((item) => (
              <li
                key={item.name}
                onClick={() => selected(item)}
                className="sort__item"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType } from '../../store/action';
import { sortOptions } from '../../constants/const';

function SortingOption(): JSX.Element {
  const activeSortType = useAppSelector((state) => state.sortType);
  const [isOpenSortList, setIsOpenSortList] = useState(false);
  const dispatch = useAppDispatch();

  function handleOpenSortList() {
    setIsOpenSortList(true);
  }

  function handleChooseSort(item: string) {
    dispatch(setSortType(item));
    setIsOpenSortList(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOpenSortList}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpenSortList && (
        <ul className='places__options places__options--custom places__options--opened'>
          {sortOptions.map((item) => <li className={item === activeSortType ? 'places__option--active' : 'places__option'} onClick={() => handleChooseSort(item)} tabIndex={0} key={item}>{item}</li>)}
        </ul>
      )}
    </form>

  );
}

export default SortingOption;

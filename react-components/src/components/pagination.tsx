import React from 'react';
import { IPagination } from '../types/types';

function Pagination(props: IPagination) {
  const arrayPagination = [];
  for (let i = 1; i <= props.number; i++) {
    arrayPagination.push(i);
  }
  console.log(arrayPagination);

  async function handler(event: React.MouseEvent<HTMLButtonElement>) {
    await props.getPageNumber((event.target as HTMLButtonElement).id);
  }

  return (
    <div className="page_pagination">
      {arrayPagination.map((item) => (
        <button
          onClick={handler}
          className="icon_pagination"
          key={item}
          id={`?page=${item}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

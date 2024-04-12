import React from 'react';

// styled
import WrapTableFooter from './index.styled';

// data
import { Icons } from '../../../assets/icons';

const TableFooter = ({
  page,
  range,
  onChangePage,
  totalPages,
}) => {
  return (
    <WrapTableFooter>
      {/* <div className="pagination-info">
        {`Page ${page} of ${totalPages}`}
      </div> */}
      <div className="pagination-controls">
        <button
          onClick={() => onChangePage(page - 1)}
          disabled={page === 1}
          className="pagination-button"
        >
          <img src={Icons.IcArrowLeftActive} alt="Previous page" />
        </button>
        {range?.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => onChangePage(pageNumber)}
            className={`pagination-button ${
              pageNumber === page ? 'active' : ''
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => onChangePage(page + 1)}
          disabled={page === totalPages}
          className="pagination-button"
        >
          <img src={Icons.IcArrowRightActive} alt="Next page" />
        </button>
      </div>
    </WrapTableFooter>
  );
};

export default TableFooter;

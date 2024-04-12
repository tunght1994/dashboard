import { useState, useEffect } from 'react';

const calculateRange = (totalPages) => {
  const range = [];
  for (let i = 1; i <= totalPages; i++) {
    range.push(i);
  }
  return range;
};

const useTable = (data, currentPage, itemsPerPage, total) => {
  const [tableRange, setTableRange] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const totalPages = Math.ceil(total / itemsPerPage);
      const range = calculateRange(totalPages);
      setTableRange(range);

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const slicedData = data.slice(startIndex, endIndex);
      setCurrentPageData(slicedData);
    }
  }, [data, currentPage, itemsPerPage, total]);

  return { currentPageData, tableRange };
};

export default useTable;

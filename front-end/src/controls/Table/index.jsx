import React, { useMemo, useState } from "react";

// styled
import { WrapTableListItem } from "./index.styled";

// controls
import EmptyData from "../EmptyData";

// data

// hook
import useTable from "../../hook/useTable";

// component
// import TableFooter from './TableFooter'
import { Icons } from "../../assets/icons";
import Button from "../Button";

const Table = ({ data = null, columns = null, hover = true, onClick, setSelectedIndex }) => {
  const getCaps = (head, value) => {
    if (head) return head;
    return value;
  };

  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(10);

  const { slice, range } = useTable(data, page, selectedOption);

  const handleChangePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleClickBtn = (index) => {
    setSelectedIndex(index)
  }

  return (
    <WrapTableListItem styledWidth={columns.length}>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((item, index) => (
                <th className="header" key={index}>
                  {getCaps(item.header, item.value)}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {slice.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>
                <EmptyData icon={Icons.Empty} text="No search results" />
              </td>
            </tr>
          ) : (
            slice.map((item, index) => (
              <tr className={`${hover && "hover"}`} key={index}>
                {columns.map((col, colIndex) => (
                  <td className="value" key={colIndex} >
                    {colIndex === columns.length - 1 &&
                    Array.isArray(item[col.value]) ? (
                      <Button text="Xem" onClick={() => handleClickBtn(index)}/>
                    ) : (
                      item[col.value]
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* <TableFooter
				onChangePage={handleChangePage}
				data={data}
				slice={slice}
				page={page}
				range={range}
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/> */}
    </WrapTableListItem>
  );
};

export default Table;

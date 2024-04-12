import React from "react";
import { Icons } from "../../assets/icons";
import Button from "../Button";
import convertDateTime from "../../helper/convertTime";
import EmptyData from "../EmptyData";
import TableFooter from "./TableFooter";
import useTable from "../../hook/useTable";
import { WrapTableListItem } from "./index.styled";

const Table = ({ data = null, columns = null, hover = true, total, setSelectedIndex, page, itemsPerPage, onChange }) => {
  
  const getCaps = (head, value) => {
    if (head) return head;
    return value;
  };

  const { currentPageData: slice, tableRange: range } = useTable(data, page, itemsPerPage, total);

  const handleClickBtn = (index) => {
    setSelectedIndex(index);
  };

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
            slice?.map((item, index) => (
              <tr className={`${hover && "hover"}`} key={index}>
                {columns.map((col, colIndex) => (
                  <td className="value" key={colIndex}>
                    {colIndex === columns.length - 1 &&
                    Array.isArray(item[col.value]) ? (
                      <Button text="Xem" onClick={() => handleClickBtn(index)} />
                    ) : (
                      colIndex === 0 ? convertDateTime(item[col.value], "DD/MM/YYYY") : item[col.value]
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <TableFooter
        page={page}
        range={range}
        totalPages={range}
        onChangePage={onChange}
      />
    </WrapTableListItem>
  );
};

export default Table;

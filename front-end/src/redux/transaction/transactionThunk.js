import { setLoadingState } from "../loading/loadingThunk";
import {
  fetchTransactionFailed,
  fetchTransactionStart,
  fetchTransactionSuccess,
} from "./transactionSlice";
import axios from "axios";

const host = "http://localhost:5000";

export const getTransactionInventory =
  (limit, lastId, isScrolling = false) =>
  async (dispatch) => {
    dispatch(setLoadingState(true))
    try {
      dispatch(fetchTransactionStart());
      const response = await axios.get(`${host}/api/inventory`, {
        params: {
          limit: limit,
          lastId: lastId,
        },
      });
      // console.log(response.data.data)
      dispatch(
        fetchTransactionSuccess({
          data: response.data.data || [],
          totalInventoryCount: response.data.totalInventoryCount,
          isScrolling,
        })
      );
      dispatch(setLoadingState(false))

    } catch (error) {
      dispatch(fetchTransactionFailed(error, message));
      dispatch(setLoadingState(false))
      console.log(error);
    }
  };

export const exportDataToExcel = () => async (dispatch) => {
  try {
    const response = await axios.get(`${host}/api/export`, {
      responseType: "blob",
    });
    if (response.status !== 200) {
        console.error("Error exporting data:", error);
    }
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inventory.xlsx";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error exporting data:", error);
  }
};

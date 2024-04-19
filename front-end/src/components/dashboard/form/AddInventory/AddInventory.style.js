import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";

export const AddInventoryWrap = styled.div`
  ${BlockWrapStyles}
  margin: 16px;
  z-index: 2000;
  position: relative;
  height: 380px;
  .invetory-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    gap: 10px;
    &-item {
      display: flex;
      gap: 10px;
      input {
        width: 400px;
        height: 35px;
        padding: 10px;
      }
      .img-file {
        padding: 10px 0;
      }
      .value {
        width: 20%;
        display: flex;
        align-items: center;
      }
    }
    .btn-submit{
      width: 100%;
      height: 50px;
      background: #5D5FEF;
      border-radius: 10px;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

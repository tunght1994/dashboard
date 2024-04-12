import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";

export const AddInventoryWrap = styled.div`
  ${BlockWrapStyles}
  margin: 16px;

  height: calc(100% - 73px);
  .invetory-content {
    display: flex;
    flex-direction: column;
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
      width: 100px;
      height: 50px;
      background: #5D5FEF;
      border-radius: 10px;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

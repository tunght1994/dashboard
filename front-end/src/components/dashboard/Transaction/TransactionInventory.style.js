import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";

export const TransactionWrap = styled.div`
    ${BlockWrapStyles}
    margin: 16px;
    height: calc(100% - 104px);
    flex: 1;
    display: flex;
    flex-direction: column;
    .transaction-filter{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &-export{
            display: flex;
            align-items: center;
            cursor: pointer;
            .icon-export{
                width: 30px;
    
            }

        }
    }
    .transaction-list{
        height: 96%;
        .header {
            display: grid;
            grid-template-columns: 200px 300px 200px 300px 240px;
            border-bottom: 1px #000 solid;
        }
        ul{
            justify-content: center;
        }
        .wrap-transaction-list{
            height:100%;
            overflow: overlay;
            flex-grow: 1;
            position: relative;
            .list-transaction{
                width: 100%;
                position: absolute;
                display: flex;
                flex-direction: column;
            }
        }
    }

`   
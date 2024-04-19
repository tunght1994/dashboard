import styled from "styled-components";

const WrapPopupShowImage = styled.div`
    z-index: 2000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .content-img{
        width: 560px;
        height: 560px;
    }
`

export {
    WrapPopupShowImage
}
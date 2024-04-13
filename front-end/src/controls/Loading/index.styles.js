import { styled } from "styled-components";

const WrapLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* một lớp mờ */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loading-spinner {
    border: 6px solid #f3f3f3; /* màu nền của spinner */
    border-top: 6px solid #3498db; /* màu của các phần còn lại */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite; /* tạo hiệu ứng quay */
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { WrapLoading };

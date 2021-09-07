import { RiCloseCircleFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styled, { css } from "styled-components";

export const TodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;

  &:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }

  &:nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(255, 12, 241, 1) 0%,
      rgba(250, 0, 135, 1) 100%
    );
  }

  &:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
  }

  ${({ isComplete }) =>
    isComplete &&
    css`
      text-decoration: line-through;
      opacity: 0.4;
    `}
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

export const DeleteIcon = styled(RiCloseCircleFill)`
  margin-right: 5px;
  color: #fff;
`;

export const EditIcon = styled(TiEdit)`
  color: #fff;
`;

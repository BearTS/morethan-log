import { TCategories } from "src/types"
import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"
import styled from "@emotion/styled"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <LeftGroup>
        <CategorySelect></CategorySelect>
        <SubscribeButton
          data-eo-form-toggle-id="45ec5aac-0d54-11f0-81da-9d1fd4347bde"
        >
         
          Subscribe
        </SubscribeButton>
      </LeftGroup>
      <OrderButtons />
    </StyledWrapper>
  )
}

export default FeedHeader

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
  padding-bottom: 1rem;
`

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`


const SubscribeButton = styled.button`
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray4};

  &:hover {
    background: ${({ theme }) => theme.colors.gray2};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2.5px;
  }
`

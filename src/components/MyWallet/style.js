import styled from 'styled-components';
import { FormControl } from 'material-ui/Form';

export const WalletWrapper = styled.div``;

export const AddCoinWrapper = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  justify-content: center;

  @media (min-width: 700px) {
    justify-content: flex-start;
  }
`;

export const SelectWrapper = styled.div`
  margin-right: 10px;
`;

export const FormWrapper = styled(FormControl)`
  min-width: 120px !important;

  @media (min-width: 700px) {
    flex-flow: row;
  }
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
    width: 16px;
    height: auto;
  }
`;

export const WalletListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

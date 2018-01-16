import styled from 'styled-components';
import { FormControl } from 'material-ui/Form';
import { default as AddIconDefault } from 'material-ui-icons/Add';

export const WalletWrapper = styled.div``;

export const AddCoinWrapper = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;

export const SelectWrapper = styled.div`
  margin-right: 10px;
`;

export const FormWrapper = styled(FormControl)`
  min-width: 120px !important;
`;

export const AddIcon = styled(AddIconDefault)``;

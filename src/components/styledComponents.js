import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FONT_RIGHTEOUS } from '../utils/constants';

export const PrimaryButton = styled(Button)`
  background-color: #eec51e;
  color: black;
  font-family: ${FONT_RIGHTEOUS};
  border-radius: 25px;
  text-transform: capitalize;
  :hover {
    background-color: #eec51e;
  } 
`;

export const TextButton = styled(Button)`
  font-family: ${FONT_RIGHTEOUS};
  text-transform: capitalize;
`;

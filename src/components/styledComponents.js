import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR_PRIMARY, FONT_RIGHTEOUS } from '../utils/constants';

export const PrimaryButton = styled(Button)`
  background-color: ${COLOR_PRIMARY};
  color: black;
  font-family: ${FONT_RIGHTEOUS};
  border-radius: 25px;
  text-transform: capitalize;
  :hover {
    background-color: ${COLOR_PRIMARY};
  } 
`;

export const SecondaryButton = styled(Button)`
  background-color: black;
  color: ${COLOR_PRIMARY};
  font-family: ${FONT_RIGHTEOUS};
  border-radius: 25px;
  text-transform: capitalize;
  :hover {
    background-color: black;
  } 
`;

export const TextButton = styled(Button)`
  font-family: ${FONT_RIGHTEOUS};
  text-transform: capitalize;
`;

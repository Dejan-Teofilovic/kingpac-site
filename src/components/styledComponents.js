import { Button, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { COLOR_PRIMARY, FONT_AMARANTH, FONT_RIGHTEOUS } from '../utils/constants';

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

export const PrimaryTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
    fontFamily: FONT_AMARANTH,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: FONT_AMARANTH,
    '& fieldset': {
      border: `2px solid ${grey[800]}`,
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});
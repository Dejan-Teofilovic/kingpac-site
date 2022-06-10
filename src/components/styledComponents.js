import { TimelineItem } from '@mui/lab';
import {
  Accordion,
  Button,
  Card,
  Dialog,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  TableContainer,
  TextField
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_WARNING,
  FONT_AMARANTH,
  FONT_RIGHTEOUS
} from '../utils/constants';

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

export const PrimaryIconButton = styled(IconButton)({
  backgroundColor: COLOR_PRIMARY,
  '&:hover': {
    backgroundColor: COLOR_PRIMARY
  }
});

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

export const CustomDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 25,
    bgColor: COLOR_PRIMARY
  }
});

export const PrimaryCard = styled(Card)({
  borderRadius: 25,
  backgroundColor: COLOR_PRIMARY
});

export const SecondaryAccordion = styled(Accordion)({
  backgroundColor: grey[900],
  color: grey[200],
  '& .Mui-expanded p': {
    color: COLOR_PRIMARY
  },
});

export const SecondaryTableContainer = styled(TableContainer)({
  '&.MuiTableContainer-root': {
    backgroundColor: grey[900]
  },
  '& .MuiTableCell-head': {
    color: COLOR_PRIMARY
  },
  '& .MuiTableCell-root': {
    fontFamily: FONT_AMARANTH,
    border: 'none',
    padding: '10px 5px'
  },
  '& .MuiTableCell-body': {
    color: grey[300],
    overflow: 'auto'
  }
});

export const PrimaryLinearProgressbar = styled(LinearProgress)({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#362e11',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: COLOR_PRIMARY,
  },
});

export const CustomTimelineItem = styled(TimelineItem)(({ theme }) => ({
  '&.MuiTimelineItem-root:before': {
    flex: 'none'
  }
}));

export const SuccessLinearProgressbar = styled(LinearProgress)({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: COLOR_SECONDARY,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: COLOR_SUCCESS,
  },
});

export const WarningLinearProgressbar = styled(LinearProgress)({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: COLOR_SECONDARY,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: COLOR_WARNING,
  },
});
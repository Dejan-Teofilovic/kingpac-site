import React from 'react';
import { AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ExpandMore } from '@mui/icons-material';
import { FAQ, FONT_AMARANTH, FONT_RIGHTEOUS, VAR_FADE_IN_UP } from '../../utils/constants';
import { SecondaryAccordion } from '../../components/styledComponents';
import MotionDiv from '../../components/MotionDiv';

export default function FaqSection({ bgcolor }) {
  return (
    <Box bgcolor={bgcolor} py={8} id="faq">
      <Container maxWidth="lg" id="about-us">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            FAQ
          </Typography>
        </MotionDiv>

        <Box mt={3}>
          {
            FAQ.map(faqItem => (
              <MotionDiv variants={VAR_FADE_IN_UP} key={faqItem.id}>
                <SecondaryAccordion>
                  <AccordionSummary expandIcon={<ExpandMore sx={{ color: grey[200] }} />}>
                    <Typography
                      fontFamily={FONT_RIGHTEOUS}
                      color={grey[200]}
                      fontSize={{ xs: 14, md: 18 }}
                    >{faqItem.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      fontFamily={FONT_AMARANTH}
                      color={grey[300]}
                      fontSize={{ xs: 14, md: 16 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </AccordionDetails>
                </SecondaryAccordion>
              </MotionDiv>
            ))
          }
        </Box>
      </Container>
    </Box>
  );
}
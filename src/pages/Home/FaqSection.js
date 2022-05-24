import React from 'react';
import { AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import { FAQ, FONT_AMARANTH, FONT_RIGHTEOUS } from '../../utils/constants';
import { grey } from '@mui/material/colors';
import { SecondaryAccordion } from '../../components/styledComponents';
import { ExpandMore } from '@mui/icons-material';

export default function FaqSection() {
  return (
    <Box py={8} id="faq">
      <Container maxWidth="lg" id="about-us">
        <Typography
          fontFamily={FONT_RIGHTEOUS}
          fontSize={{ xs: 24, sm: 36, md: 48 }}
          color={grey[300]}
          textAlign="center"
        >
          FAQ
        </Typography>

        <Box mt={3}>
          {
            FAQ.map(faqItem => (
              <SecondaryAccordion key={faqItem.id}>
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
            ))
          }
        </Box>
      </Container>
    </Box>
  );
}
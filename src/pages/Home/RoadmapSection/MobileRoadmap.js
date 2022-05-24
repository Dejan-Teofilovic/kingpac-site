import React from 'react';
import { Timeline, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { FiberManualRecord } from '@mui/icons-material';
import { Card, CardContent, CardHeader, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { grey } from '@mui/material/colors';
import { COLOR_PRIMARY, FONT_AMARANTH, FONT_RIGHTEOUS, ROADMAP_DATA, VAR_FADE_IN_UP } from '../../../utils/constants';
import MotionDiv from '../../../components/MotionDiv';
import { CustomTimelineItem } from '../../../components/styledComponents';

export default function MobileRoadmap() {
  return (
    <Timeline>
      {
        ROADMAP_DATA.map((roadmapItem, index) => (
          <CustomTimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: COLOR_PRIMARY }} />
              <TimelineConnector sx={{ bgcolor: COLOR_PRIMARY }} />
            </TimelineSeparator>
            <TimelineContent>
              <MotionDiv variants={VAR_FADE_IN_UP}>
                <Card
                  sx={{
                    bgcolor: grey[900],
                    borderRadius: 5,
                    overflow: 'hidden'
                  }}
                >
                  <CardHeader
                    title={roadmapItem.name}
                    titleTypographyProps={{
                      fontFamily: FONT_RIGHTEOUS,
                      fontSize: 22,
                      color: COLOR_PRIMARY
                    }}
                  />
                  <CardContent sx={{ py: 0 }}>
                    <List sx={{ py: 0 }}>
                      {
                        roadmapItem.content.map((dataItem, index) => (
                          <ListItem sx={{ py: 0 }} key={index}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <FiberManualRecord sx={{ fontSize: 12, color: grey[300] }} />
                            </ListItemIcon>
                            <ListItemText
                              sx={{
                                fontFamily: FONT_AMARANTH,
                                color: grey[300]
                              }}
                              disableTypography
                            >{dataItem}</ListItemText>
                          </ListItem>
                        ))
                      }
                    </List>
                  </CardContent>
                </Card>
              </MotionDiv>
            </TimelineContent>
          </CustomTimelineItem>
        ))
      }

    </Timeline>
  );
}
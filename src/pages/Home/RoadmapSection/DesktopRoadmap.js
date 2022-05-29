import React from 'react';
import { 
  Box, 
  Card, 
  Grid, 
  Stack, 
  CardHeader, 
  CardContent, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText
} from "@mui/material";
import { grey } from '@mui/material/colors';
import { 
  COLOR_PRIMARY, 
  FONT_AMARANTH, 
  FONT_RIGHTEOUS, 
  ROADMAP_DATA, 
  VAR_FADE_IN_DOWN, 
  VAR_FADE_IN_UP 
} from '../../../utils/constants';
import { FiberManualRecord } from '@mui/icons-material';
import MotionDiv from '../../../components/MotionDiv';

export default function DesktopRoadmap() {
  return (
    <Grid container columns={7} alignItems="center" mt={36} mb={28}>
      <Grid item md={1}>
        <Stack direction="row" alignItems="center">
          {/* Card of phrase 1 */}
          <Box
            width={15}
            height={15}
            borderRadius="50%"
            bgcolor={COLOR_PRIMARY}
            position="relative"
          >
            <MotionDiv variants={VAR_FADE_IN_UP}>
              <Card
                sx={{
                  bgcolor: grey[900],
                  position: 'absolute',
                  top: -220,
                  left: -20,
                  minWidth: 320,
                  borderRadius: 5,
                  overflow: 'hidden'
                }}
              >
                <CardHeader
                  title="Phase 1"
                  titleTypographyProps={{
                    fontFamily: FONT_RIGHTEOUS,
                    fontSize: 22,
                    color: COLOR_PRIMARY
                  }}
                />
                <CardContent sx={{ py: 0 }}>
                  <List sx={{ py: 0 }}>
                    {
                      ROADMAP_DATA[0].content.map((dataItem, index) => (
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
          </Box>

          {/* Dot of phrase 1 */}
          <Box
            flexGrow={1}
            height={5}
            bgcolor={COLOR_PRIMARY}
          />
        </Stack>
      </Grid>
      <Grid item md={1}>
        <Box
          flexGrow={1}
          height={5}
          bgcolor={COLOR_PRIMARY}
        />
      </Grid>
      <Grid item md={1}>
        <Stack direction="row" alignItems="center">
          <Box
            flexGrow={1}
            height={5}
            bgcolor={COLOR_PRIMARY}
            sx={{ borderTopRightRadius: '5px 5px', borderBottomRightRadius: '5px 5px' }}
          />
          <Box
            width={15}
            height={15}
            borderRadius="50%"
            bgcolor={COLOR_PRIMARY}
            position="relative"
          >
            <MotionDiv variants={VAR_FADE_IN_DOWN}>
              <Card
                sx={{
                  bgcolor: grey[900],
                  position: 'absolute',
                  top: 40,
                  left: -160,
                  minWidth: 320,
                  borderRadius: 5
                }}
              >
                <CardHeader
                  title="Phase 2"
                  titleTypographyProps={{
                    fontFamily: FONT_RIGHTEOUS,
                    fontSize: 22,
                    color: COLOR_PRIMARY
                  }}
                />
                <CardContent sx={{ py: 0 }}>
                  <List sx={{ py: 0 }}>
                    {
                      ROADMAP_DATA[1].content.map((dataItem, index) => (
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
          </Box>
          <Box
            flexGrow={1}
            height={5}
            bgcolor={COLOR_PRIMARY}
            sx={{ borderTopLeftRadius: '5px 5px', borderBottomLeftRadius: '5px 5px' }}
          />
        </Stack>
      </Grid>
      <Grid item md={1}>
        <Box
          flexGrow={1}
          height={5}
          bgcolor={COLOR_PRIMARY}
        />
      </Grid>
      <Grid item md={1}>
        <Stack direction="row" alignItems="center">
          <Box
            flexGrow={1}
            height={5}
            bgcolor={COLOR_PRIMARY}
            sx={{ borderTopRightRadius: '5px 5px', borderBottomRightRadius: '5px 5px' }}
          />
          <Box
            width={15}
            height={15}
            borderRadius="50%"
            bgcolor={COLOR_PRIMARY}
            position="relative"
          >
            <MotionDiv variants={VAR_FADE_IN_UP}>
              <Card
                sx={{
                  bgcolor: grey[900],
                  position: 'absolute',
                  top: -240,
                  left: -160,
                  minWidth: 320,
                  borderRadius: 5
                }}
              >
                <CardHeader
                  title="Phase 3"
                  titleTypographyProps={{
                    fontFamily: FONT_RIGHTEOUS,
                    fontSize: 22,
                    color: COLOR_PRIMARY
                  }}
                />
                <CardContent sx={{ py: 0 }}>
                  <List sx={{ py: 0 }}>
                    {
                      ROADMAP_DATA[2].content.map((dataItem, index) => (
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
          </Box>
          <Box
            flexGrow={1}
            height={5}
            bgcolor={COLOR_PRIMARY}
            sx={{ borderTopLeftRadius: '5px 5px', borderBottomLeftRadius: '5px 5px' }}
          />
        </Stack>
      </Grid>
      <Grid item md={1}>
        <Box
          flexGrow={1}
          height={5}
          bgcolor={COLOR_PRIMARY}
        />
      </Grid>
      <Grid item md={1}>
        <Stack direction="row" alignItems="center">
          <Box
            flexGrow={1}
            height={5}
            bgcolor={COLOR_PRIMARY}
            sx={{ borderTopRightRadius: '5px 5px', borderBottomRightRadius: '5px 5px' }}
          />
          <Box
            width={15}
            height={15}
            borderRadius="50%"
            bgcolor={COLOR_PRIMARY}
            position="relative"
          >
            <MotionDiv variants={VAR_FADE_IN_DOWN}>
              <Card
                sx={{
                  bgcolor: grey[900],
                  position: 'absolute',
                  top: 40,
                  left: -200,
                  minWidth: 320,
                  borderRadius: 5,
                }}
              >
                <CardHeader
                  title="Phase 4"
                  titleTypographyProps={{
                    fontFamily: FONT_RIGHTEOUS,
                    fontSize: 22,
                    color: COLOR_PRIMARY
                  }}
                />
                <CardContent sx={{ py: 0 }}>
                  <List sx={{ py: 0 }}>
                    {
                      ROADMAP_DATA[3].content.map((dataItem, index) => (
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
          </Box>
          <Box
            flexGrow={1}
            height={5}
            bgcolor={COLOR_PRIMARY}
            sx={{ borderTopLeftRadius: '5px 5px', borderBottomLeftRadius: '5px 5px' }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
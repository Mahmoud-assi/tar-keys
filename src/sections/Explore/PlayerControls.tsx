import {
  Box,
  CircularProgress,
  createTheme,
  IconButton,
  Slider,
  sliderClasses,
  Stack,
  svgIconClasses,
  ThemeProvider,
  Typography,
} from '@mui/material'
import Play from '@mui/icons-material/PlayArrow'
import Pause from '@mui/icons-material/Pause'
import formattedTime from '@/utils/formatted-time'
import { type RefObject } from 'react'
import { useAtom } from 'jotai'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import FastForwardIcon from '@mui/icons-material/FastForward'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import { PlayerPropsAtom } from '@/atoms/Explore'
import { useLocale } from '@/providers'

export default function VideoControls({
  videoRef,
  isMouseMoving = false,
}: {
  videoRef: RefObject<HTMLVideoElement>
  isMouseMoving?: boolean
}) {
  const [videoProps, setVideoProps] = useAtom(PlayerPropsAtom)
  const { locale: language } = useLocale()

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        tabIndex={0}
        sx={{
          position: 'absolute',
          top: 0,
          p: 1,
          width: '100%',
          background: `
            linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.25) 30%,
                rgba(0, 0, 0, 0.2) 60%,
                rgba(0, 0, 0, 0) 100%
            )
            `,
          opacity: isMouseMoving || !videoProps.playing ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* <Stack direction="row-reverse" spacing={2} alignItems="center">
          <IconButton
            data-focusable="true"
            sx={{ svg: { width: 30, height: 30 } }}
            onClick={() => setJotai(ExpandedEpisodeListDrawerAtom, prev => !prev)}
          >
            <PlaylistPlayIcon />
          </IconButton>
          <Typography variant="body1">{currentVideo?.title}</Typography>
        </Stack> */}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {videoProps.loading && <CircularProgress sx={{ color: 'common.white' }} />}
        {!videoProps.loading && (
          <Stack
            width="100%"
            direction={language === 'en' ? 'row' : 'row-reverse'}
            alignItems="center"
            spacing={2}
            sx={{
              direction: 'ltr !important',
              opacity: isMouseMoving || !videoProps.playing ? 1 : 0,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              transformOrigin: 'center',
              scale: isMouseMoving || !videoProps.playing ? '1' : '0.95',
              [`.${svgIconClasses.root}`]: {
                fontSize: 30,
              },
            }}
          >
            <IconButton
              data-focusable="true"
              onClick={() => {
                const current = videoRef.current
                if (current) current.currentTime = Math.max(current.currentTime - 10, 0)
              }}
            >
              <FastRewindIcon />
            </IconButton>

            <IconButton
              data-focusable="true"
              onClick={() => setVideoProps({ ...videoProps, playing: !videoProps.playing })}
            >
              {videoProps.playing ? <Pause /> : <Play />}
            </IconButton>

            <IconButton
              data-focusable="true"
              onClick={() => {
                const current = videoRef.current
                if (current) {
                  current.currentTime = Math.min(current.currentTime + 10, current.duration)
                }
              }}
            >
              <FastForwardIcon />
            </IconButton>
          </Stack>
        )}
      </Box>
      {/* Bottom control bar */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: `
            linear-gradient(
                to top,
                rgba(0, 0, 0, 0.35) 30%,
                rgba(0, 0, 0, 0.25) 60%,
                rgba(0, 0, 0, 0) 100%
            )
            `,
          width: '100%',
          opacity: !videoProps.playing || isMouseMoving ? 1 : 0,
          transition: 'background 0.25s ease-in, opacity 0.25s ease-in-out',
        }}
      >
        <Stack width="100%" alignItems="center">
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="calc(100% - 16px)"
            maxHeight={30}
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <IconButton
                data-focusable="true"
                size="small"
                onClick={() => setVideoProps(prev => ({ ...prev, playing: !prev.playing }))}
                sx={{
                  svg: { width: 22, height: 22 },
                }}
              >
                {videoProps.playing ? <Pause /> : <Play />}
              </IconButton>
              <Typography variant="body2" noWrap lineHeight="normal">
                {/* {`${formattedTime(
                  videoRef?.current?.currentTime
                )} / ${formattedTime(videoRef?.current?.duration)}`} */}

                {`${formattedTime(videoProps?.playedSeconds as number)} / ${formattedTime(
                  videoRef?.current?.duration,
                )}`}
              </Typography>
            </Stack>
            <Stack
              spacing={0.5}
              direction={language === 'en' ? 'row' : 'row-reverse'}
              alignItems="center"
              width="max-content"
            >
              <ThemeProvider theme={outerTheme => createTheme({ ...outerTheme, direction: 'ltr' })}>
                <Slider
                  data-focusable="true"
                  value={videoProps.volume! * 100}
                  onChange={(_, value) => {
                    const newVolume = (Array.isArray(value) ? value[0] : value) / 100
                    setVideoProps({
                      ...videoProps,
                      volume: newVolume,
                      muted: newVolume === 0,
                    })
                  }}
                  sx={{
                    py: 1,
                    width: 30,
                    [`& .${sliderClasses.thumb}`]: {
                      width: 8,
                      height: 8,
                      color: 'common.white',
                      mr: language === 'ar' ? -1 : 0,
                    },
                    [`& .${sliderClasses.rail}, & .${sliderClasses.track}`]: {
                      borderRadius: 4,
                      color: 'common.white',
                      height: 4,
                    },
                  }}
                />
              </ThemeProvider>
              <IconButton
                data-focusable="true"
                size="small"
                onClick={() => setVideoProps(prev => ({ ...prev, muted: !prev.muted }))}
                sx={{
                  svg: { width: 22, height: 22 },
                }}
              >
                {videoProps.muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </IconButton>
            </Stack>
          </Stack>

          <Stack mx={2} width="calc(100% - 6px)" direction="row-reverse">
            <ThemeProvider theme={outerTheme => createTheme({ ...outerTheme, direction: 'ltr' })}>
              <Slider
                min={0}
                max={100}
                value={videoProps.played! * 100}
                step={0.1}
                onChange={(_, value: number | number[]) => {
                  //   const percent = Array.isArray(value) ? value[0] : value;
                  //   setVideoProps((prev) => ({
                  //     ...prev,
                  //     played: percent / 100,
                  //   }));
                  const percent = Array.isArray(value) ? value[0] : value
                  const newTime = (percent / 100) * (videoRef.current?.duration || 0)
                  setVideoProps(prev => ({
                    ...prev,
                    played: percent / 100,
                    playedSeconds: newTime,
                  }))
                }}
                onMouseDown={() => setVideoProps(prev => ({ ...prev, seeking: true }))}
                onChangeCommitted={(_, value: number | number[]) => {
                  const percent = Array.isArray(value) ? value[0] : value
                  const newTime = (percent / 100) * videoRef?.current?.duration
                  if (videoRef.current) videoRef.current.currentTime = newTime
                  setVideoProps(prev => ({ ...prev, seeking: false }))
                }}
                sx={{
                  pb: 0.25,
                  [`& .${sliderClasses.thumb}`]: {
                    width: 8,
                    height: 8,
                    color: 'common.white',
                    ml: 0.125,
                    mr: language === 'ar' ? -1 : 0,
                  },
                  [`& .${sliderClasses.rail}, & .${sliderClasses.track}`]: {
                    height: 4,
                    color: 'common.white',
                  },
                }}
              />
            </ThemeProvider>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

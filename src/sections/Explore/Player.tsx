import { Box, Card } from '@mui/material'
import { useEffect, useRef, type RefObject } from 'react'
import { useAtom } from 'jotai'
import { PlayerPropsAtom } from '@/atoms/Explore'
import ReactPlayer from 'react-player'
import VideoControls from './PlayerControls'

// import VideoControls from './VideoControl'

export default function VideoPlayer({ url }: { url: string }) {
  const playerRef = useRef<HTMLVideoElement>(null)
  const [videoProps, setVideoProps] = useAtom(PlayerPropsAtom)

  useEffect(() => {
    const player = playerRef.current
    if (!player) return
    if (videoProps.playing) player.play().catch(e => console.error('Play error:', e.message))
    else player.pause()
  }, [videoProps.playing, url])

  return (
    <Box
      component={Card}
      position="relative"
      sx={{
        height: { xs: 200, md: 450 },
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0px 4px 16px 0px #00000014',
      }}
    >
      <Box
        component={ReactPlayer}
        ref={playerRef}
        src={url}
        sx={{
          objectFit: 'contain',
          width: '100% !important',
          height: '100% !important',
        }}
        muted={videoProps.muted}
        // {...{ ...(!videoProps.playing && { light: '/images/explore/video-bg.jpg' }) }}
        controls={false}
        onPlay={() => setVideoProps(prev => ({ ...prev, playing: true }))}
        onPause={() => setVideoProps(prev => ({ ...prev, playing: false }))}
        onTimeUpdate={() => {
          const player = playerRef.current
          if (!player || videoProps.seeking) return
          setVideoProps(prev => ({
            ...prev,
            playedSeconds: player.currentTime,
            played: player.currentTime / player.duration,
          }))
        }}
        onDurationChange={() => {
          const player = playerRef.current
          if (!player) return
          setVideoProps(prev => ({ ...prev, duration: player.duration }))
        }}
        onWaiting={() => setVideoProps(prev => ({ ...prev, loading: true }))}
        onPlaying={() => setVideoProps(prev => ({ ...prev, loading: false }))}
      />
      <VideoControls
        videoRef={playerRef as RefObject<HTMLVideoElement>}
        // isMouseMoving={isMouseMoving}
      />
    </Box>
  )
}

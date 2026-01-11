import { atom } from 'jotai'

type PlayeroProps = {
  id?: number
  src: string
  pip: boolean
  playing: boolean
  controls: boolean
  light: boolean
  volume: number
  muted: boolean
  played: number
  loaded: number
  duration: number
  playbackRate: number
  loop: boolean
  seeking: boolean
  loadedSeconds: number
  playedSeconds: number
  loading?: boolean
}

export const PlayerPropsAtom = atom<Partial<PlayeroProps>>({
  src: undefined,
  pip: false,
  playing: true,
  controls: false,
  light: false,
  volume: 1,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
  seeking: false,
  loadedSeconds: 0,
  playedSeconds: 0,
  loading: true,
})

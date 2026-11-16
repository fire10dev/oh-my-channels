import {Composition, Still} from 'remotion';
import {Mix, mixGroup, mixRoundSeconds} from './Mix';
import {MixThumbnail} from './MixThumbnail';
import {Short} from './Short';
import {ShortVariant, VARIANTS} from './ShortVariant';
import {SHORTS_G, ShortG} from './ShortG';
import {BATCH1, BATCH3, BATCH3_GROUP, COZY, ThumbCard, TrackThumbnail} from './TrackThumbnail';
import {POMO, PomodoroOverlay} from './Pomodoro';
import {PomodoroThumbnail} from './PomodoroThumbnail';
import scenes from './scenes.json';
import {FPS as STILL_FPS, Scene, StillLoop} from './StillLoop';
import {TRACKS} from './tracks';

const SHORT_FPS = 30;
const SHORT_SECONDS = 20;
const MIX_FPS = 24;

export const RemotionRoot: React.FC = () => (
  <>
    {TRACKS.map((t) => (
      <Composition
        key={t.id}
        id={`Short-${t.id}`}
        component={Short}
        defaultProps={{id: t.id}}
        width={1080}
        height={1920}
        fps={SHORT_FPS}
        durationInFrames={SHORT_FPS * SHORT_SECONDS}
      />
    ))}
    {SHORTS_G.map((s) => (
      <Composition key={`g-${s.id}`} id={`ShortG-${s.id}`} component={ShortG} defaultProps={{id: s.id}}
        width={1080} height={1920} fps={SHORT_FPS} durationInFrames={SHORT_FPS * SHORT_SECONDS} />
    ))}
    {VARIANTS.map((v) => (
      <Composition
        key={`v-${v.vid}`}
        id={`ShortV-${v.vid}`}
        component={ShortVariant}
        defaultProps={{vid: v.vid}}
        width={1080}
        height={1920}
        fps={SHORT_FPS}
        durationInFrames={SHORT_FPS * SHORT_SECONDS}
      />
    ))}
    {['A', 'B', 'C', 'D', 'E', 'F'].map((g) => (
      <Composition
        key={g}
        id={`Mix-${g}`}
        component={Mix}
        defaultProps={{group: g}}
        width={1920}
        height={1080}
        fps={MIX_FPS}
        durationInFrames={Math.round(mixRoundSeconds(mixGroup(g)) * MIX_FPS)}
      />
    ))}
    {['A', 'B', 'C', 'D', 'E', 'F'].map((g) => (
      <Still key={`thumb-${g}`} id={`MixThumb-${g}`} component={MixThumbnail} defaultProps={{group: g}} width={1280} height={720} />
    ))}
    {TRACKS.map((t) => (
      <Still key={`tthumb-${t.id}`} id={`Thumb-${t.id}`} component={TrackThumbnail} defaultProps={{id: t.id}} width={1280} height={720} />
    ))}
    <Composition
      id="Pomodoro"
      component={PomodoroOverlay}
      defaultProps={{accent: '#ffb347', trackName: 'Focus: Window Seat Lo-fi 💻 · Break: Sunrise Coffee ☕'}}
      width={1920}
      height={1080}
      fps={1}
      durationInFrames={(POMO.focus + POMO.rest) * POMO.rounds}
    />
    <Still id="PomodoroThumb" component={PomodoroThumbnail} width={1280} height={720} />
    {(scenes as Scene[]).map((sc) => (
      <Composition key={`still-${sc.id}`} id={`Still-${sc.id}`} component={StillLoop} defaultProps={sc} width={1920} height={1080} fps={STILL_FPS} durationInFrames={sc.roundFrames} />
    ))}
    {BATCH1.map(({key, ...card}) => (
      <Still key={`b1-${key}`} id={`Thumb1-${key.replace(/_/g, '-')}`} component={ThumbCard} defaultProps={{...card, ...COZY}} width={1280} height={720} />
    ))}
    {BATCH3.map(({id, ...card}) => (
      <Still key={`b3-${id}`} id={`Thumb3-${id}`} component={ThumbCard} defaultProps={{...card, img: `thumb3/${id}.jpg`, ...BATCH3_GROUP[id[0]]}} width={1280} height={720} />
    ))}
  </>
);

// Localised Off Limits Life shorts: one generic composition, data + timeline come in as input props.
import React from 'react';
import {Composition} from 'remotion';
import {ShortX, sxFrames, SXProps} from '../../../channels/off-limits-life/src/ShortX';
import {CoverX, CoverProps} from './Cover';
import {L10n} from './L10n';
import {FunBanner, FunLogo} from '../../../channels/off-limits-life/src/Brand2';
type BP = {dict: Record<string, string>};
const LogoL: React.FC<BP> = ({dict}) => <L10n dict={dict}><FunLogo id="PEEK" /></L10n>;
const BannerL: React.FC<BP> = ({dict}) => <L10n dict={dict}><FunBanner id="PEEK" /></L10n>;

type LProps = SXProps & {dict?: Record<string, string>};
const SXLoc: React.FC<LProps> = ({dict, ...p}) => <L10n dict={dict}><ShortX {...p} /></L10n>;

const FPS = 30;
export const Root: React.FC = () => (
  <>
    <Composition
      id="SXL"
      component={SXLoc}
      fps={FPS}
      width={1080}
      height={1920}
      durationInFrames={300}
      defaultProps={{id: 'x', data: {title: '', hook: '', asof: '', world: 'cruise', long: '', chapters: []}, timeline: {total: 10, segs: []}} as LProps}
      calculateMetadata={({props}) => ({durationInFrames: sxFrames(props.timeline, FPS)})}
    />
    <Composition id="Cover" component={CoverX} fps={FPS} width={1080} height={1920} durationInFrames={1}
      defaultProps={{img: 'x.png', big: 'HELLO', small: 'world', tag: 'X'} as CoverProps} />
    <Composition id="LogoL" component={LogoL} fps={FPS} width={800} height={800} durationInFrames={1} defaultProps={{dict: {}}} />
    <Composition id="BannerL" component={BannerL} fps={FPS} width={2560} height={1440} durationInFrames={1} defaultProps={{dict: {}}} />
  </>
);

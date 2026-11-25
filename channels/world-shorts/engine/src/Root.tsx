import React from 'react';
import {CalculateMetadataFunction, Composition, staticFile} from 'remotion';
import {MapShort, Video} from './MapShort';
import ids from './ids.json';
import {Banner, Logo} from './Brand';

type Props = {id: string; video?: Video; geo?: any};
const calc: CalculateMetadataFunction<Props> = async ({props}) => {
  const video: Video = await (await fetch(staticFile(`${props.id}/video.json`))).json();
  const geo = await (await fetch(staticFile(`${props.id}/geo.json`))).json();
  return {durationInFrames: video.frames, fps: video.fps, props: {...props, video, geo}};
};
const Comp: React.FC<Props> = ({video, geo}) => (video && geo ? <MapShort video={video} geo={geo} /> : null);

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="logo" component={Logo} width={800} height={800} fps={30} durationInFrames={1} />
    <Composition id="banner-en" component={Banner} width={2560} height={1440} fps={30} durationInFrames={1} defaultProps={{title: 'MAP PARADOX', tag: 'Maps that break your brain · new Shorts daily'}} />
    <Composition id="banner-es" component={Banner} width={2560} height={1440} fps={30} durationInFrames={1} defaultProps={{title: 'PARADOJAS DEL MAPA', tag: 'Mapas que te vuelan la cabeza · Shorts cada día'}} />
    {(ids as string[]).map((id) => (
      <Composition key={id} id={id} component={Comp} width={1080} height={1920} fps={30} durationInFrames={300} defaultProps={{id}} calculateMetadata={calc} />
    ))}
  </>
);

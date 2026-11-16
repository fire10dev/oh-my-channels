import React from "react";
import { Composition } from "remotion";
import { DUR, FPS } from "./lib";
import { StyleA } from "./StyleA";
import { StyleB } from "./StyleB";
import { StyleC } from "./StyleC";
import { PenCrayon } from "./v2/PenCrayon";
import { DongHo } from "./v2/DongHo";
import { ShapeMorph } from "./v2/ShapeMorph";
import { FeltToy } from "./v2/FeltToy";
import { Watercolor } from "./v3/Watercolor";

const V2 = { durationInFrames: 180, fps: FPS, width: 1920, height: 1080 };

export const Root: React.FC = () => (
  <>
    <Composition id="StyleA" component={StyleA} durationInFrames={DUR} fps={FPS} width={1920} height={1080} />
    <Composition id="StyleB" component={StyleB} durationInFrames={DUR} fps={FPS} width={1920} height={1080} />
    <Composition id="StyleC" component={StyleC} durationInFrames={DUR} fps={FPS} width={1920} height={1080} />
    <Composition id="PenCrayon" component={PenCrayon} {...V2} />
    <Composition id="DongHo" component={DongHo} {...V2} />
    <Composition id="ShapeMorph" component={ShapeMorph} {...V2} />
    <Composition id="FeltToy" component={FeltToy} {...V2} />
    <Composition id="Watercolor" component={Watercolor} durationInFrames={960} fps={FPS} width={1920} height={1080} />
  </>
);

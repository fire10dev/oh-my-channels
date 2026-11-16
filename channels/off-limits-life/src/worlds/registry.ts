import type React from 'react';
import type {Tod} from './SouthPole';

/** Worlds for the shared engine src/IX2W.tsx (IX007+) and ShortX. One entry per long; add new worlds here. */
export type WorldProps = {frame: number; tod: Tod; you?: string; plane?: string; dur: number};
export type WorldDef = {World: React.FC<WorldProps>; viewOf: (name: string, tod: Tod) => [number, number, number]; views: Record<string, [number, number, number]>};
export const WORLDS: Record<string, WorldDef> = {};

import {Supermax, VIEWS as supermaxViews, viewOf as supermaxView} from './Supermax';
WORLDS.supermax = {World: Supermax, viewOf: supermaxView, views: supermaxViews};
import {Bomber, VIEWS as bomberViews, viewOf as bomberView} from './Bomber';
WORLDS.bomber = {World: Bomber, viewOf: bomberView, views: bomberViews};
import {Carrier, VIEWS as carrierViews, viewOf as carrierView} from './Carrier';
WORLDS.carrier = {World: Carrier, viewOf: carrierView, views: carrierViews};
import {Capsule, VIEWS as capsuleViews, viewOf as capsuleView} from './Capsule';
WORLDS.capsule = {World: Capsule, viewOf: capsuleView, views: capsuleViews};
import {Polar, VIEWS as polarViews, viewOf as polarView} from './Polar';
WORLDS.polar = {World: Polar, viewOf: polarView, views: polarViews};
import {Conclave, VIEWS as conclaveViews, viewOf as conclaveView} from './Conclave';
WORLDS.conclave = {World: Conclave, viewOf: conclaveView, views: conclaveViews};
import {Boxship, VIEWS as boxshipViews, viewOf as boxshipView} from './Boxship';
WORLDS.boxship = {World: Boxship, viewOf: boxshipView, views: boxshipViews};
import {Mountain, VIEWS as mountainViews, viewOf as mountainView} from './Mountain';
WORLDS.mountain = {World: Mountain, viewOf: mountainView, views: mountainViews};
import {Lighthouse, VIEWS as lighthouseViews, viewOf as lighthouseView} from './Lighthouse';
WORLDS.lighthouse = {World: Lighthouse, viewOf: lighthouseView, views: lighthouseViews};
import {Summit, VIEWS as summitViews, viewOf as summitView} from './Summit';
WORLDS.summit = {World: Summit, viewOf: summitView, views: summitViews};

import artbashThumb from '../assets/artbash/thumb.png';
import mcaThumb from '../assets/mca/thumb.png';
import earthThumb from '../assets/earth/thumb.png';
import dsmithThumb from '../assets/dsmith/thumb.png';
import beerThumb from '../assets/beer/thumb.png';
import ikeaThumb from '../assets/ikea/thumb.gif';
import ssThumb from '../assets/ss/thumb.png';

import Artbash from '../contents/work/projects/artbash';
import Mca from '../contents/work/projects/mca';
import Dsmith from '../contents/work/projects/dsmith';
import Earth from '../contents/work/projects/earth';
import Beer from '../contents/work/projects/beer';
import Ikea from '../contents/work/projects/ikea';
import SelfService from '../contents/work/projects/self-service';

import WA from '../assets/play/1-wesanderson.png';
import LC from '../assets/play/2-lucky-charms.png';
import PZ from '../assets/play/2-puzzle.gif';
import CNC from '../assets/play/3-cnc.png';
import JAN from '../assets/play/4-postcard-2101.jpg';
import FEB from '../assets/play/4-postcard-2102.jpg';
import MAR from '../assets/play/5-postcard-2103.jpg';
import APR from '../assets/play/6-postcard-2104.jpg';
import JAM from '../assets/play/7-jam-package.png';
import MOMA from '../assets/play/8-moma-poster.jpg';
import PL from '../assets/play/9-playlist.jpg';



export const WORK = [
    {
        title: 'ArtBash 2023',
        tags: ['identity', 'typeface', 'poster', 'social media'],
        year: 2022,
        thumb: artbashThumb,
        slug: 'artbash',
        content: <Artbash/>
    }, {
        title: 'MCA Chicago',
        tags: ['identity', 'poster', 'web', 'collateral'],
        year: 2021,
        thumb: mcaThumb,
        slug: 'mca',
        content: <Mca />
    }, {
        title: 'Because Earth',
        tags: ['poster', 'illustration', 'collateral'],
        year: 2020,
        thumb: earthThumb,
        slug: 'because-earth',
        content: <Earth />
    }, {
        title: 'The Field of David Smith',
        tags: ['publication'],
        year: 2020,
        thumb: dsmithThumb,
        slug: 'david-smith',
        content: <Dsmith />
    }, {
        title: 'Summer Hackathon - Beer',
        tags: ['web', 'uiux', 'identity'],
        year: 2022,
        thumb: beerThumb,
        slug: 'beer',
        content: <Beer />
    }, {
        title: "IKEA - What's Your Next Move?",
        tags: ['motion', 'commercial', 'social media'],
        year: 2023,
        thumb: ikeaThumb,
        slug: 'ikea',
        wip: true,
        content: <Ikea />
    }, {
        title: 'Self Service',
        tags: ['uiux'],
        year: 2023,
        thumb: ssThumb,
        slug: 'self-service',
        wip: true,
        content: <SelfService />
    }, 
];



export const PLAY = [
    {
        title: 'Wes Anderson Wordmark',
        desc: "Wordmark for Wes Anderson, the American Filmmaker known for the unique visuals and narrative styles. The flipped letters represent the iconic symmetrical compositions in his film. I made the custom typeface that suits with the unique atmosphere of Anderson's films.",
        tags: ['identity'],
        year: 2021,
        thumb: WA,
        slug: 'wes-anderson'
    }, {
        title: 'Lucky Charms',
        desc: "I created a series of little origami four-leaf clovers. For the Package Design course, I explored different ways to manipulate papers to create complex forms.",
        tags: ['art', 'package'],
        year: 2023,
        thumb: LC,
        slug: 'luck'
    }, {
        title: 'Dynamic Word: Puzzle',
        desc: "I animated the word 'puzzle,' making the letters as puzzle pieces and fitting them together in a rectangle. As it is my first motion work using Adobe After Effects, I was able to explore different motion techniques and learn how to make a composition more dynamic.",
        tags: ['motion'],
        year: 2023,
        thumb: PZ,
        slug: 'puzzle'
    }, {
        title: 'Continuity & Change',
        desc: "I made a 12-page risograph booklet about the two iconic designers in the 60s, Josef Müller-Brockmann and Herb Lubalin. This is my favorite spread from the booklet, showing various posters designed by Müller-Brockmann.",
        tags: ['publication'],
        year: 2022,
        thumb: CNC,
        slug: 'cnc'
    }, {
        title: 'January 2021 Calendar',
        desc: "I made a series of calendar postcards in early 2021, just for fun! I tried things I wanted to do but didn't have a chance to in the school projects.",
        tags: ['postcard', 'personal'],
        year: 2021,
        thumb: JAN,
        slug: 'postcard-jan'
    }, {
        title: 'February 2021 Calendar',
        desc: "I made a series of calendar postcards in early 2021, just for fun! I tried things I wanted to do but didn't have a chance to in the school projects.",
        tags: ['postcard', 'personal'],
        year: 2021,
        thumb: FEB,
        slug: 'postcard-feb'
    }, {
        title: 'March 2021 Calendar',
        desc: "I made a series of calendar postcards in early 2021, just for fun! I tried things I wanted to do but didn't have a chance to in the school projects.",
        tags: ['postcard', 'personal'],
        year: 2021,
        thumb: MAR,
        slug: 'postcard-mar'
    }, {
        title: 'April 2021 Calendar',
        desc: "I made a series of calendar postcards in early 2021, just for fun! I tried things I wanted to do but didn't have a chance to in the school projects.",
        tags: ['postcard', 'personal'],
        year: 2021,
        thumb: APR,
        slug: 'postcard-apr'
    }, {
        title: 'Hero Jam Package',
        desc: "I participated in SCAD Summer Program during high school senior year, to study more about graphic design. For a week, I created a new label design for Hero Jam.",
        tags: ['package'],
        year: 2018,
        thumb: JAM,
        slug: 'hero-jam'
    }, {
        title: 'MoMA Photography Exhibition',
        desc: 'I made a poster for a series of photography exhibition. I tried to use titles as images that represents the theme of each exhibition.',
        tags: ['poster'],
        year: '2021',
        thumb: MOMA,
        slug: 'moma'
    }, {
        title: 'Playlist',
        desc: 'I made a set of symbols using the numbers 1 through 6, and made a poster for a realxing music playlist using the symbols. I tried to set a calm and ambient atmosphere using minimal, rounded shapes and light, muted colors.',
        tags: ['poster'],
        year: '2020',
        thumb: PL,
        slug: 'playlist'
    }
]
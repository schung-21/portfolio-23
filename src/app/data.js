import artbashThumb from '../assets/artbash/thumb.png';
import mcaThumb from '../assets/mca/thumb.png';
import earthThumb from '../assets/earth/thumb.png';
import dsmithThumb from '../assets/dsmith/thumb.png';
import beerThumb from '../assets/beer/thumb.png';

import Artbash from '../contents/work/projects/artbash';
import Mca from '../contents/work/projects/mca';
import Dsmith from '../contents/work/projects/dsmith';
import Earth from '../contents/work/projects/earth';
import Beer from '../contents/work/projects/beer';

// {
//     title: 'Title',
//     tags: ['tag1', 'tag2'],
//     year: 2023,
//     thumb: 'image',
//     slug: 'address'
// },

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
        title: 'Summer Hackathon: Beer',
        tags: ['web', 'uiux', 'identity'],
        year: 2022,
        thumb: beerThumb,
        slug: 'beer',
        content: <Beer />
    },
];

// 'title': {
//     title: 'Title',
//     desc: 'description',
//     tags: ['tag1', 'tag2'],
//     year: 2023,
//     slug: 'address'
// },

export const PLAY = [
    {
        title: 'Wes Anderson Wordmark',
        desc: '',
        tags: ['identity'],
        year: 2021,
        slug: 'wes-anderson'
    }, {
        title: 'Lucky Charms',
        desc: '',
        tags: ['art', 'package'],
        year: 2023,
        slug: 'lucky-charms'
    }, {
        title: 'Dynamic Word: Puzzle',
        desc: '',
        tags: ['motion'],
        year: 2023,
        slug: 'puzzle'
    }, {
        title: 'Hero Jam Package',
        desc: '',
        tags: ['package'],
        year: 2018,
        slug: 'hero-jam'
    }, {
        title: 'Calendar Postcards 2021',
        desc: '',
        tags: ['postcard', 'personal'],
        year: 2021,
        slug: 'postcard'
    },
]
import artbashThumb from '../assets/artbash/poster-1main.png';
import mcaThumb from '../assets/mca/thumb.png';
import earthThumb from '../assets/earth/thumb.png';
import dsmithThumb from '../assets/dsmith/thumb.png';
import prevThumb from '../assets/prev/thumb.png';
import Artbash from '../contents/work/projects/artbash';

// {
//     title: 'Title',
//     tags: ['tag1', 'tag2'],
//     year: 2023,
//     thumb: 'image',
//     slug: 'address'
// },

export const WORK = [
    {
        title: 'Promoting Freshmen Exhibition',
        tags: ['identity', 'typeface', 'poster', 'social media'],
        year: 2022,
        thumb: artbashThumb,
        slug: 'artbash',
        content: <Artbash/>
    }, {
        title: 'Redesigning Identity System',
        tags: ['identity', 'poster', 'publication', 'website'],
        year: 2021,
        thumb: mcaThumb,
        slug: 'mca-identity'
    }, {
        title: 'Designing Across a Campaign',
        tags: ['poster', 'publication', 'illustration'],
        year: 2020,
        thumb: earthThumb,
        slug: 'because-earth'
    }, {
        title: 'Book for David Smith',
        tags: ['publication'],
        year: 2020,
        thumb: dsmithThumb,
        slug: 'david-smith'
    }, {
        title: 'My Old Portfolio',
        tags: ['website'],
        year: 2021,
        thumb: prevThumb,
        slug: 'old-portfolio'
    }, {
        title: 'Coming soon...',
        tags: ['stay', 'in', 'touch'],
        year: 2023,
        slug: ''
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
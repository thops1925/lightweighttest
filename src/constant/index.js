import { image10, image11, image24, image25, image26, image9, titan1, titan10, titan11, titan3, titan4, titan5, titan6, titan7, titan8, titan9 } from "../assets"

const homeContent = {
    title: 'Kimetsu no Yaiba',
    category: 'Category: Adventure fiction, Dark fantasy, Martial Arts',
    description: 'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.'
}

const trending = [
    {
        title: 'Attack On Titan',
        category: 'Category: Adventure fiction, Dark fantasy, Martial Arts',
        image: [image9, titan1, titan3, titan4, titan5, titan6, titan7, titan8, titan9, titan10, titan11],
        rating: ' 5.0',
    }, {
        title: 'Jujutsu Kaisen',
        category: 'Category: Adventure fiction,  Martial Arts',
        image: [image10],
        rating: ' 5.0',

    },


    {
        title: 'One Piece',
        category: 'Category: Adventure fiction, Comedy, Family',
        image: [image11],
        rating: ' 5.0',

    }
]

const selectedEpisode = {
    title: 'Attack On Titan',
    season: 'Season 1',
    description: 'When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…',
    episode: [{
        title: 'Episode 1',
        category: 'The citizens worry they will be at the Titans mercy after many years of peace.',
        image: titan1,
    }, {
        title: 'Episode 2',
        category: 'The citizens worry they will be at the Titans mercy after many years of peace.',
        image: titan5,
    }, {
        title: 'Episode 2',
        category: 'The citizens worry they will be at the Titans mercy after many years of peace.',
        image: titan3,
    }, {
        title: 'Episode 4',
        category: 'The citizens worry they will be at the Titans mercy after many years of peace.',
        image: titan4,
    },
    ]
}

const throwback = [image24, image25, image25, image26]
export { homeContent, trending, throwback, selectedEpisode }
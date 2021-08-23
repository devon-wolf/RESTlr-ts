import { makeJSONPretty } from '../services/string-utils';

describe('String formatting utils', () => {
    const startingString = `[{"character":"Bender","quote":"You know, they say you can judge a man by the company he keeps; so here's\nthe professor's oldest friend: a grotesque, stinking lobster!","image":"https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"},{"character":"Fry","quote":"I'm not a robot! I don't like having discs crammed into me; unless they're\nOreos. And then, only in the mouth.","image":"https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"}]`;

    const expectation = [
        '[',
        '{',
        '"character": "Bender"',
        `"quote": "You know, they say you can judge a man by the company he keeps; so here's\nthe professor's oldest friend: a grotesque, stinking lobster!"`,
        `"image": "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"`,
        '}',
        '{',
        '"character": "Fry"',
        `"quote": "I'm not a robot! I don't like having discs crammed into me; unless they're\nOreos. And then, only in the mouth."`,
        `"image": "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"`,
        '}'
    ];

    expect(makeJSONPretty(startingString)).toEqual(expectation);
});
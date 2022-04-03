import React from 'react';
import { render, screen, event } from '@testing-library/React';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SearchBox from './SearchBox';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        ctx.json({
            results: [
                {
                    id: 1,
                    name: 'Rick Sanchez',
                    status: 'Alive',
                    image: 'example.com/image.png'
                }
            ]
        })
    })
);

describe('SearchBox', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('takes a url, method selection, and optional request body and returns a JSON response', async () => {
        render(<SearchBox />);
        //make sure radio buttons are present on the screen
        const radios = screen.getAllByRole('radio');
        radios.map(radio => {
           return expect(radio).toBeInTheDocument();
        })
        //check that number of buttons is correct
        expect(radios.length).toEqual(5);
    })
})

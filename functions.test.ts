const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const expected = ['Rusty','Nozzle']
    test('Testing array', () => {
        expect(['Rusty','Nozzle','Brobot']).toEqual(expect.arrayContaining(expected))
    })

    test('If array returns', () => {
        expect(shuffleArray.toHaveReturned())
    })
})


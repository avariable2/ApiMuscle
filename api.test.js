const classApi = require('./api.js')

function instancierObj() {
    return new classApi()
}

beforeEach(() => {
    return instancierObj();
});

test('Test getParEquipement() avec \'barre de traction\'', () => {
    const objApi = instancierObj()
    expect(objApi.getParEquipement('barre de traction').length).toBe(3)
})

test('Test getParEquipement() avec \'barre\'', () => {
    const objApi = instancierObj()
    expect(objApi.getParEquipement('barre').length).toBe(30)
})

test('Test getParCible() avec \'triceps\'', () => {
    const objApi = instancierObj()
    expect(objApi.getParCible('triceps').length).toBe(25)
})

test('Test getParId() avec \'25\'', () => {
    const objApi = instancierObj()
    expect(objApi.getParId('25').length).toBe(1)
})

test('Test getParNom() avec \'soulevé de terre\'', () => {
    const objApi = instancierObj()
    expect(objApi.getParNom('soulevé de terre').length).toBe(1)
})
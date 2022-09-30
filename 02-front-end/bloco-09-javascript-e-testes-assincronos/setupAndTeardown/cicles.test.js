
let cities = [];

const addCity = (city) => {
 cities.push(city);
};

const removeCity = (city) => {
 cities = cities.filter((eachCity) => eachCity !== city);
};

beforeEach (() => {
    cities = [...cities, 'Salvador']
})

test('Testa a função addCity', () => {
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
  
  test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(4);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
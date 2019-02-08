const sum = require('./index');
describe.skip('sum testit' , () =>{
test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => {
    expect(sum(1, 2)).toBe (3);
});

test('Syötteet numeromaisia merkkijonoja', ()=>{
    expect(sum("1","2")).toBe(3);
});

test('Syötteet ei numeromaisia merkkijonoja "minna" ja " jaska"', ()=>{
    expect(() => {sum("Minna","Jaska")}).toThrow('ei lukuja');
});

test('vain yksi parametri annettu, palautetaan luku itse', ()=>{
    expect(sum(4)).toBe(4);
});

test('Ei anneta parametreja, heittää poikkeuksen', ()=>{
        throw new error('nolla parametria annettu');
        expect(() => {sum()}).toThrow(' ');
});
})
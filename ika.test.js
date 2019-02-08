const ika = require('./ika');


test('Syötteet ei numeromainen merkkijono "minna"', ()=>{
    expect(() => {ika("Minna")}).toThrow('ei lukuja');
});

test('Syötetty alle 0 ', ()=>{
    expect(() => {ika(-10)}).toThrow('Ikä ei voi olla negatiivinen');

});

test('Ei anneta parametreja, heittää poikkeuksen', ()=>{

        expect(() => {ika()}).toThrow('Nolla parametria annettu');
});


test('Henkilö tasan 18', ()=>{

    expect(ika(18)).toBe(true);
});

test('Henkilö alle 18', ()=>{

    expect(ika(14)).toBe(false);
});

test('Henkilö yli 18', ()=>{

    expect(ika(20)).toBe(true);
});

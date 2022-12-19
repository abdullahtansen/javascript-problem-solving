const students = {
    name:'sakib khan',
    id:121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    movies: [{name: 'no.1',year: 2015},{name:"king khan", year:2018}],
    car:{
        brand: 'tesla',
        price: 500000,
        made: 2025,
        menufacturer:{
            name : 'corola',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
console.log(students.movies[1]);
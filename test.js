const db = [
    {
        id: '1',
        firstname: 'Michael',
        lastname: 'Chi',
    },
    {
        id: '2',
        firstname: 'Rebecca',
        lastname: 'Li',
    },
    {
        id: '3',
        firstname: 'Paul',
        lastname: 'Wong',
    },
];

const result = db.filter(person => person.id === '1');
console.log(result[0]);
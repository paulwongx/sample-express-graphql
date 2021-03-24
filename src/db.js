const {
	GraphQLID,
} = require('graphql');

const db = [
    {
        id: '1',
        firstname: 'Michael',
        lastname: 'Chi',
        height: 123,
        bestfriends: ['Rebecca, Paul'],
        attire: {
            hat: 'black',
            shirt: 'grey',
            jeans: 'blue',
        },
        visited: [
            {location: 'Toronto', year: 2014 },
            {location: 'San Francisco', year: 2018 },
        ]
    },
    {
        id: '2',
        firstname: 'Rebecca',
        lastname: 'Li',
        height: 180,
        visited: [
            {location: 'Paris', year: 2020 },
            {location: 'Brazil', year: 2000 },
            {location: 'Hawaii', year: 2010 },
            {location: 'Portland', year: 2001 },
        ]
    },
    {
        id: '3',
        firstname: 'Paul',
        lastname: 'Wong',
    },
];

module.exports = { db };
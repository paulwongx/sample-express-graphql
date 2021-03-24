// importing
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { graphqlHTTP } = require('express-graphql');
const {
	GraphQLID,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
} = require('graphql');
const fs = require('fs');
const { db } = require('./db');

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
// app.use(helmet()); // This make graphql not work
app.use(express.json());

const attireType = new GraphQLObjectType({
	name: 'Attire',
	fields: {
		hat: { type: GraphQLString },
		shirt: { type: GraphQLString },
		jeans: { type: GraphQLString },
	},
});

const visitedType = new GraphQLObjectType({
	name: 'Visited',
	fields: {
		location: { type: GraphQLString },
		year: { type: GraphQLInt },
	},
});

// GraphQL Types
const PersonType = new GraphQLObjectType({
	name: 'Person',
	fields: {
		id: { type: GraphQLNonNull(GraphQLString) },
		firstname: { type: GraphQLString },
		lastname: { type: GraphQLString },
		height: { type: GraphQLInt },
		bestfriends: { type: GraphQLList(GraphQLString) },
		attire: { type: attireType },
        visited: {type: GraphQLList(visitedType)}
	},
});

// GraphQL Schema
const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'People',
		fields: {
			people: {
				type: GraphQLList(PersonType),
				resolve: (root, args, context, info) => {
					return db;
				},
			},
			person: {
				type: PersonType,
				args: {
					id: { type: GraphQLNonNull(GraphQLString) },
				},
				resolve: (root, args, context, info) => {
					const result = db.filter(person => person.id === args.id);
					return result[0];
				},
			},
		},
	}),
});

// routes
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

// api routes
app.get('/', async (req, res) => {
	res.status(200).send('Facebook ads API');
});

// listener
app.listen(port, () =>
	console.log(`Listening on http://localhost:${port} (click to open)`)
);

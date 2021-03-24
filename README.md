# Sample Express GraphQL Queries

## How to use
```
$ npm install
$ npm run dev
```

## Example Queries

```js
// Get all people
query People {
  person(id: "2") {
    id
    firstname
    lastname
    height
    bestfriends
    attire {
      hat
      shirt
      jeans
    }
  	visited {
  	  location
  	  year
  	}
  }
}

// Get a specific person
query People {
  people {
    id
    firstname
    lastname
    height
    bestfriends
    attire {
      hat
      shirt
      jeans
    }
  	visited {
  	  location
  	  year
  	}
  }
}
```

## All GraphQL Types
```
getNamedType
getNullableType
GraphQLBoolean
GraphQLEnumType
GraphQLFloat
GraphQLID
GraphQLInputObjectType
GraphQLInt
GraphQLInterfaceType
GraphQLList
GraphQLNonNull
GraphQLObjectType
GraphQLScalarType
GraphQLSchema
GraphQLString
GraphQLUnionType
isAbstractType
isCompositeType
isInputType
isLeafType
isOutputType
```

## Resources
[GraphQL JS Schemas](https://graphql.org/code/#javascript)

[GraphQL Object Types](https://graphql.org/graphql-js/type/#graphqlobjecttype)
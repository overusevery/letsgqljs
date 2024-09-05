# [practice] graphql server

## feature
 - using apollo server
 - api is provided on Next.js

## example usage
 - start server with
 `npm run dev`
 - example query
  `curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:3000/api/graphql \
    --data '{"query":"query ExampleQuery($userId: ID!) {\n  books {\n    title\n    author {\n      name\n    }\n  },\n  user(id: $userId) {\n    name\n    havingBook {\n      title\n      author {\n        name\n      }\n    }\n  }\n}","variables":{"userId":"1"}}'`

## impression
 - using express/nest may be better option for graphql server
   - becase next.js's api functionality is too simple
 - resolver chain explanation is good docs to understand implemention(https://www.apollographql.com/docs/apollo-server/data/resolvers#example)
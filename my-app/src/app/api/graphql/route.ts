var { graphql, buildSchema } = require("graphql")
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
 
// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello() {
    return "Hello world!"
  }
}
 
export async function GET() {
    // Run the GraphQL query '{ hello }' and print out the response
    const data = await graphql({
    schema,
    source: "{ hello }",
    rootValue
    })    
    return Response.json(data)
     
}
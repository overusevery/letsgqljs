var _a = require("graphql"), graphql = _a.graphql, buildSchema = _a.buildSchema;
// Construct a schema, using GraphQL schema language
var schema = buildSchema("\n  type Query {\n    hello: String\n  }\n");
// The rootValue provides a resolver function for each API endpoint
var rootValue = {
    hello: function () {
        return "Hello world!";
    }
};
// Run the GraphQL query '{ hello }' and print out the response
graphql({
    schema: schema,
    source: "{ hello }",
    rootValue: rootValue
}).then(function (response) {
    console.log(response);
});

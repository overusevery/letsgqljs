import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

// req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req: any) => ({ req }),
});


export { handler as GET, handler as POST };
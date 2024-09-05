
const getBooks = () => {
  return books
}
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    owner: "A-san",
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    owner: "B-san",
  },
];

const users = [
  {id: "1", name:"A-san"},
  {id: "2", name:"B-san"},
  {id: "3", name:"C-san"},
]

export const resolvers = {
  Query: {
    hello: () => 'world',
    books: getBooks,
    user: (parent: any, args: { id: string; }) => {
      const u = users.find((u) => u.id == args.id)
      console.log("user:", args.id, u)
      return u
    }
  },
  Book:{
    author: (parent: { author: string; }) => ({name:parent.author}),
  },
  User:{
    havingBook:(parent: any)=>{
      return books.filter((b) => b.owner === parent.name)
    }
  }
};
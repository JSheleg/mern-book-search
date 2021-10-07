const express = require('express');
const path = require('path');
//db connection
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
//import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')
//import authentication middleware
const {authMiddleWare} = require('./utils/auth');
const { Server } = require('http');
// const routes = require('./routes');

//express server
const app = express();
const PORT = process.env.PORT || 3001;

//apollo server with express app
Server.applyMiddleWare({app});

//middleware parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

//get all 
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}${server.graphqlPath}`));
});

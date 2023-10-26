const express = require('express');
const mongoose = require('mongoose');
const budgetRoutes = require('./routes/budget');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(`mongodb+srv://rpavard1:UM1Nj7bJl86Qe0tC@wisewallet.2qzgozr.mongodb.net/WiseWallet?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/budget', budgetRoutes);
app.use('/auth', userRoutes);
app.use('/category', categoryRoutes);

module.exports = app;
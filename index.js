const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts'); 

mongoose.connect('mongodb://sunkara:Sunkara2611@ds135796.mlab.com:35796/jalantech',{ useNewUrlParser: true });
mongoose.connection.on('connected', function(){
        console.log("Database is connected");
    });





const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/posts/',postRoutes);

const appPath = path.join(__dirname,'frontend');
  app.use(express.static(appPath));

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });

const PORT = process.env.PORT || 3000;



app.listen(PORT , function() {
  console.log('App is running!',PORT);
});
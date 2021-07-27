const { urlencoded } = require("express");
const express = require("express");
const fs = require("fs");
const { restart } = require("nodemon");
const path = require('path')
const app = express();
const port = process.env.PORT || 8000;

const db = require('./database.js')

//EXPRESS RELATED STUFF
app.use('/static', express.static('static'));  //for serving static files
app.use(express.urlencoded());

// PUG REATED STUFF
app.set('view engine', 'pug') // set the template engine for pug
app.set('views',path.join(__dirname, 'views')) //set the views directory

//ENDPOINTS
// app.get('/', (req,res)=>{
//     const con = "this is best course";
//     const params= {'title':'Pub is best thing','content':con}
//     res.status(200).render('index.pug',params)
// })
app.get('/', (req,res)=>{
    // const con = "this is best course";
    // const params= {'title':'Pub is best thing','content':con}
    res.status(200).render('index.pug')
})
app.get('/index', (req,res)=>{
    // const con = "this is best course";
    // const params= {'title':'Pub is best thing','content':con}
    res.status(200).render('index.pug')
})
app.get('/videos', (req,res)=>{
    // const con = [1,2,3,4,5];
    // const db = require('./database.js')
  
db.video.find({},(err,doc)=>{
    // console.log(doc)
    let params= {'Project': doc}
    res.status(200).render('videos.pug', params)
})

})
app.get('/contact', (req,res)=>{
    // const con = "this is best course";
    // const params= {'title':'Pub is best thing','content':con}
    res.status(200).render('contact.pug')
})

app.post('/contact', (req,res)=>{
    var myData = new db.contact(req.body)
    myData.save().then(()=>{
        res.send("The item is saved to the database")
    }).catch(()=>{
        res.status(400).send("Item is not saved to the database")
    })
    // res.status(200).render('contact.pug')
})

app.get('/blog', (req,res)=>{
    // const con = "this is best course";
    // const params= {'title':'Pub is best thing','content':con}
    // const db = require('./database.js')
  
    db.blog.find({},(err,doc)=>{
        // console.log(doc)
        let params= {'Project': doc}
        res.status(200).render('blog.pug', params)
    })
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`)
})
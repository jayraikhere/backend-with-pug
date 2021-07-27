
const mongoose = require('mongoose');
  
// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/Saktimaan', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
  
// User model
const videos = mongoose.model('videos', {
    cname: { type: String },
    desc: { type: String }
});

const blogs = mongoose.model('blogs', {
    head: { type: String },
    desc: { type: String }
});

const contacts = mongoose.model('contacts', {
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    desc: { type: String }
});

// var doc = videos.find({}, function (err, docs) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         // console.log("First function call : ", docs);
//         // doc = docs
// // console.log(typeof docs)
//         // return console.log(docs)
//         // docs.toObject({ getters: true })
//         // docs.set( cname,desc, { strict: false });
//         return docs;

//     }
//     return err
// });
// console.log(typeof doc.exec())
// console.log(doc.exec())


// var doc = await videos.find({},null,{lean:true});
// console.log(doc)

// var docs = async () => { 
//     return await videos.find().then()
// }
//  console.log(typeof docs)

function _vid(){
    // var q = videos.find({},(err,docs)=>{
    //     return docs
    // })
    // console.log(typeof q)
    // console.log(q)
    let q = videos
    return q
}
function _blog(){
    let q = blogs
    return q
}
function _contact(){
    let q = contacts
    return q
}

module.exports = {
    video: _vid(),
    blog: _blog(),
    contact: _contact()
}


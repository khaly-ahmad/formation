const express= require('express');
const app=express();
 const ejs = require('ejs');

// app.use((err,req,res, next)=>{
//     console.log(err.stack);
//     res.status(500).send('quelque chose a mal tournée');
//     next();
// });

// app.get('/',(req,res)=>{
//     res.send('<h1>salut la famille</h1>')
// });

// app.use((req,res,next)=>{
//     res.status(404).send('page non trouvée');
// });


app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render("index",{nom:'mlkjhgfdsqazertyuiop', details:'azertyuiopmlkjhgfdsqwxcvbnjklpoiuytrezaqsdfghbvcxw'});
});


app.listen(3000,()=>{
    console.log('http://localhost:3000/');
});


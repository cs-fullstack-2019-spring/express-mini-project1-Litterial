var express = require('express');
var use_router = express.Router();
var Heroes=require('../models/HeroesModel');

use_router.get('/',(req,res)=>{       //index
  Heroes.find({},(err,results)=>
  {
    if (err)res.send(err);    // if blank do not carry results
    else
      {
        context={allEntries:results,};
        res.render('index',context)
      }
  });
});


use_router.get('/add',(req,res)=>    //renders to add
{
  res.render('add')
});

use_router.post('/add',(req,res)=>   //post request for add
{
  Heroes.create(req.body,(err,results)=> //create
  {
    if (err) res.send(err);
    else
    {
      console.log(req.body);
      context= {isSent:req.body};   //if it is added, give a value of isSent
      res.render('add',context)
    }
  });
});




use_router.get('/find',(req,res)=> //render find
{
  res.render('find')
});

use_router.post('/find',(req,res)=>   //post for find
{
  Heroes.findOne({id:req.body.id},(err,results)=>
      {
        if (err)
        {
          res.render('find')
        }
        else
        {
          console.log(results);
          context={findResults:results};   //renders to prevent a no result error
          res.render('find',context)
        }

      });
});


//
// use_router.get('/edit',(req,res)=>
// {
//   res.render('edit')
// });
// use_router.post('/edit',(req,res)=> {
//   Heroes.findOne({id: req.body.id}, {
//   }, (err, results) => {
//     if (err) {
//       context = {isEmpty: err};
//       res.render('edit', context);
//     } else res.render('editChange');
//
//   });
// });
//
// use_router.post('/editChange',(req,res)=> {
//   Heroes.updateOne({id: req.body.findResults.id},{
//     name: req.body.findResults.name, 'powers.intelligence': req.body.findResults.poewrintelligence,
//     'powers.strength': req.body.strength, 'powers.speed': req.body.speed, 'powers.combat': req.body.combat,
//     'powers.wealth': req.body.wealth, image: req.body.image} (err, results) => {
//     if (err) res.send(err);
//     else {
//
//       context = {isSent: results};
//       res.render('editChange', context)
//     }
//   });
// });

use_router.get('/delete',(req,res)=>
{
  res.render('delete')
});

use_router.post('/delete',(req,res)=> {
  Heroes.deleteOne({id: req.params.id}, (err, results) =>{
    if (err) res.send(err);
    else {
      context = {isSent: isSent};
      res.render('delete', context)
    }
  });
});



// use_router.post('/create',(req,res)=>
// {  Heroes.create(req.body,(err,results)=>
// {
//   if (err) res.send(err);
//   else
//   {
//     res.send(results);
//     console.log(req.body);
//   }
//
// });


// use_router.get('/read/:id',(req,res)=>
// {
//   Heroes.find({id:req.params.id},(err,results)=>
//   {
//     if (err) res.send(err);
//     else res.send(results);
//   });
// });
//
//
// use_router.put('/update/:id',(req,res)=>
// {
//   Heroes.update({id:req.params.id},{name:req.body.name,intelligence:req.body.intelligence,
//     strength:req.body.strength,speed:req.body.speed,combat:req.body.combat,
//     wealth:req.body.wealth,image:req.body.image},(err,results)=>
//   {
//     if (err) res.send(err);
//     else res.send(results);
//   })
// });
//
//
// use_router.delete('/delete/:id',(req,res)=>
// {
//   Heroes.deleteOne({id:req.params.id},(err,results)=>
//   {
//     if (err) res.send(err);
//     res.send('Deleted');
//   });
//
// });


module.exports=use_router;
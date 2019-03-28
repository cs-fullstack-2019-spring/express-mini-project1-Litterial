var hi_express=require('express');
var use_router=hi_express.Router();
var Heroes=require('../models/HeroesModel');

use_router.get('/',(req,res)=>{
    res.send('This is a test');
});

use_router.post('/create',(req,res)=>
{  Heroes.create(req.body,(err,results)=>
        {
            if (err) res.send(err);
            else
            {
                res.send(results);
                console.log(req.body);
            }

        });
});

use_router.get('/read/:id',(req,res)=>
{
   Heroes.find({id:req.params.id},(err,results)=>
        {
            if (err) res.send(err);
            else res.send(results);
        });
});


use_router.put('/update/:id',(req,res)=>
{
   Heroes.update({id:req.params.id},{name:req.body.name,intelligence:req.body.intelligence,
       strength:req.body.strength,speed:req.body.speed,combat:req.body.combat,
       wealth:req.body.wealth,image:req.body.image},(err,results)=>
   {
       if (err) res.send(err);
       else res.send(results);
   })
});


use_router.delete('/delete/:id',(req,res)=>
{
    Heroes.deleteOne({id:req.params.id},(err,results)=>
    {
        if (err) res.send(err);
        res.send('Deleted');
    });

});







module.exports=use_router;
var Zangoose=require('mongoose');
var use_schema=Zangoose.Schema;
var HeroCollection= new use_schema(
    {
        id: Number,
        name: String,
        powers:{   //array for power
                intelligence: Number,
                strength: Number,
                speed: Number,
                combat: Number,
                wealth: Number,
                },
        image: String,   // image
    });

module.exports=Zangoose.model("Heroes",HeroCollection);

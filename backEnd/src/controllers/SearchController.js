const Dev = require('../models/dev')
const parsestringasArray = require('../utils/parseStringasArray')
module.exports ={
    async index(request,response){
        

        const {latitude,longitude,techs} = request.query
        const techsArray = parsestringasArray(techs)
    
        const devs = await Dev.find({
            techs: {
                $in:techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                       type:'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                }
               
            }

        })

        return response.json({devs})

    }
}
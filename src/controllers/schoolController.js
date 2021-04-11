const School = require('../models/school');

module.exports.getSchools = async(req, res) => {
    try{
        const schools = await School.find({}).populate({path: 'schoolPostedBy', select: 'userName email'});
        res.send(schools)
    }catch(e){
        res.send(e).status(500);
    }
}

module.exports.getSchool = async (req, res) => {
    try{
        const school = await School.find({_id: req.params.id}).populate({path: 'schoolPostedBy', select: 'userName email'});
        res.send(school)
    }catch(e){
        res.send(e).status(500);
    }
}
module.exports.createSchool = async (req, res) => {
   try {
        const school = new School(req.body);
        console.log('school', school)
        await school.save();
        res.status(201).json({success: true, data: school})
    } catch(e){
        res.send(e).status(500);
    }
}

module.exports.updateSchool = async (req, res) => {
    try{
        const allowedUpdate = [
            "schoolName",
            "address",
            "latitude",
            "longitude",
            "speedConnectivity",
            "typeConnectivity"
        ];
        const updates = Object.keys(req.body);
        const isAllowedUpdate = updates.every(update=>allowedUpdate.includes(update));
        if(!isAllowedUpdate){
            return res.send({error: 'Invalid updates'}).status(400);
        }
        updates.forEach(update=>req.school[update] = req.body[update]);
        await req.school.save();
        res.send(req.school);

    }catch(e){
        res.send(e).status(500)
    }
}

module.exports.deleteSchool = async (req, res) => {
    try {
      const school = await School.findByIdAndDelete({
          _id: req.params.id
      });
      if(!school){
          res.send().status(404);
      }
      res.end(school)
    }catch(e){
        res.send(e).status(500);
    }
}

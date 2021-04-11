const User = require('../models/user');

module.exports.getUsers = async(req, res) => {
    try{
        const users = await User.find({});
        res.send(users)
    }catch(e){
        res.send(e).status(500);
    }
}

module.exports.getUser = async(req, res) => {
    try{
        const user = await User.find({_id: req.params.id});
        res.send(user)
    }catch(e){
        res.send(e).status(500);
    }
}
module.exports.createUser = async (req, res) => {
   console.log(req.body)
    try {
        const user = new User( req.body);
        await user.save();
        res.send(user).status(201)
    } catch(e){
        res.send(e).status(500);
    }
}

module.exports.updateUser = async (req, res) => {
    try{
        const allowedUpdate = [
            "userName",
            "password",
            "userType"
            
        ];
        const updates = Object.keys(req.body);
        const isAllowedUpdate = updates.every(update=>allowedUpdate.includes(update));
        if(!isAllowedUpdate){
            return res.send({error: 'Invalid updates'}).status(400);
        }
        updates.forEach(update=>req.user[update] = req.body[update]);
        await req.user.save();
        res.send(req.user);

    }catch(e){
        res.send(e).status(500)
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete({
          _id: req.params.id
      });
      if(!user){
          res.send().status(404);
      }
      res.end(user)
    }catch(e){
        res.send(e).status(500);
    }
}

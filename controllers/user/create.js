
const Users = require('../../models').User;


const save = async function(req, res) {

    const body = req.body;
    console.log("error >>>>>>>>>");
    if (!body.name) {
        return ReE(res, 'Please enter an name to register.');
    }
    if (!body.email) {
        return ReE(res, 'Please enter a Name to register.');
    }
    if (!body.password) {
        return ReE(res, 'Please enter a Password to register.');
    }
   
    [err, saveDate] = await to(Users.create(body));
    
    if(err){
        return ReE(res, err);
    }
        return ReS(res, { message: 'Successfully created new user.', user:saveDate }, 201);
   

};

module.exports.save = save;


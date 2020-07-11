
const create = async function(req, res) {

    const body = req.body;
    if (!body.email) {
        return ReE(res, 'Please enter an email to register.');
    }
    if (!body.first_name) {
        return ReE(res, 'Please enter a firstname to register.');
    }
    if (!body.last_name) {
        return ReE(res, 'Please enter a lastname to register.');
    }
   
        return ReS(res, { message: 'Successfully created new user.', user:"Kavita B" }, 201);
   

};

module.exports.create = create;


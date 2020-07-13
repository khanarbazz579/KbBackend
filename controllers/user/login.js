const authService = require('../../services/authService');
const User = require('../../models').User;


const login = async function (req, res) {
    const body = req.body;
    let err, user;
   
        
          User.findOne({ email: body.email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return ReE(res, 'User not found for this email.');
            }
            if (!user.validPassword(password)) {
                return ReE(res, 'User not found for this email.');
            }
            
            return ReS(res, {
                    status: true,
                    user: user
                });
          });
        
    // [err, user] = await to(authService.authUser(req.body));
    // let response = {
    //     token: user.getJWT(),
    //     user: {
    //         isAdmin: await user.isAdmin(),
    //         ...user.toWeb()
    //     },
    //     access: {
    //         role: await user.getRole(),
    //         permissions: permission_set.id ? await user.getPermissionsFromSet() : await user.getPermissions(),
    //         set: permission_set
    //     }
    // };
    // if (user) {
    //     user = user.toJSON();
    //     if (user.is_secure_access) {
    //         let [aerr, authData] = await authService.checkUserAuthentication(user.id, userIpAddress, userBrowser);
    //         if (aerr) return ReE(res, err, 422); // Return error in authentication
    //         if (!authData) {
    //             let authCode = Math.floor(100000 + Math.random() * 900000);
    //             let [autherror, result] = await authService.createTwoFactorAuthenticationRequest({
    //                 user_id: user.id,
    //                 browser: userBrowser,
    //                 location: '',
    //                 ip_address: userIpAddress,
    //                 auth_code: authCode,
    //                 status: false
    //             });
    //             if (autherror) {
    //                 return ReE(res, autherror, 422);
    //             }
    //             return ReS(res, {
    //                 status: true,
    //                 is_auth_required: true,
    //                 auth_code: authCode,
    //                 user_id: user.id
    //             });
    //         }
    //     }
    // }

    // return ReS(res, response);
}
module.exports.login = login;
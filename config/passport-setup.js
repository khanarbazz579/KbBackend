const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');


passport.use(
    new GoogleStrategy({
        callbackURL:'/auth/google.redirect',
        clientID :'244154696611-tshcb87ksavi9p86tkkuvkd7ukbf7i5d.apps.googleusercontent.com',
        clientSecret:'pnphzoFNW3e_81CWL7NXZsyS'
    }),() =>{

    }

)
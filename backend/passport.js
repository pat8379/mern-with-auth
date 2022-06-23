const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/usersModel')
const bcrypt = require('bcryptjs')

const strategy = new LocalStrategy({usernameField: 'username', passwordField: 'password'}, async (username, password, done) => {
    try {
        const user = await User.findOne({username: username})
        if (user && (await bcrypt.compare(password, user.password))) {
            return done(null, user);
        } else {
            return done(null, false);
        }        
    } catch (error) {
        done(error)
    }

})

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});
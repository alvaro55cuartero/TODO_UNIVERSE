const jwt = require("passport-jwt");
const ExtractJwt = jwt.ExtractJwt;
const JwtStrategy = jwt.Strategy;
const User = require("../API/models/user");
const config = require("../config/database");
const passport = require("passport");


let opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
	secretOrKey: config.secret,
};

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
	console.log(jwt_payload);
	User.getPrivateUserById(jwt_payload.id, function(err, user) {
		if (err) {
			return done(err, false);
		}
		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	});
}));


module.exports = passport;
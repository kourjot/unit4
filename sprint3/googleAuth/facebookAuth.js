import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import "dotenv/config";

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.BASE_API}/auth/facebook/callback`,
      profileFields: ["id", "displayName", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        return cb(null, profile);
      } catch (error) {
        console.log(error);
      }
    }
  )
);

export { passport };

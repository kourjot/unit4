import  passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import "dotenv/config"
passport.use(
  new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BASE_API}/auth/google/callback`,

    },

    async function (accessToken, refreshToken, profile, cb) {
      try {
        return cb(null, profile);
      } catch (error) {
        console.log(error);
      }

      console.log(profile);
    }
  )
);

export  {passport}
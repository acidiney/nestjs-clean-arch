import * as expressBasicAuth from "express-basic-auth";

interface BasicAuthInterface {
  username: string,
  password: string,
}

export const basicAuth = (auth: BasicAuthInterface) => {
  return expressBasicAuth({
    users: {
      [auth.username]: auth.password
    },
    challenge: true,
  })
}
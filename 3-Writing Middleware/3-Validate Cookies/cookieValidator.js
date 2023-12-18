async function cookieValidator (cookies) {
    try {
      await externallyValidateCookie(cookies.testCookie)
    } catch {
      throw new Error('Invalid cookies')
    }
  }
/*
Here we use the cookie-parser middleware to parse incoming cookies off the req object and pass them to our cookieValidator function. The validateCookies middleware returns a Promise that upon rejection will automatically trigger our error handler.
*/
module.exports = cookieValidator
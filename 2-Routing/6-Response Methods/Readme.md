# Response methods
The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

Literally, there are 9 responses in express which we return to client using express
# Method	Description

**res.download()**	Prompt a file to be downloaded.
**res.end()**	End the response process.
**res.json()**	Send a JSON response.
**res.jsonp()**	Send a JSON response with JSONP support.
**res.redirect()**	Redirect a request.
**res.render()**	Render a view template.
**res.send()**	Send a response of various types.
**res.sendFile()**	Send a file as an octet stream.
**res.sendStatus()**	Set the response status code and send its string representation as the response body.

**https://expressjs.com/en/4x/api.html#res.send**
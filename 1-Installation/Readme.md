## Installing 

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

    $ mkdir myapp
    $ cd myapp
    
Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

    $ npm init

This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

entry point: (index.js)
Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

Now install Express in the myapp directory and save it in the dependencies list. For example:

    $ npm install express
    
To install Express temporarily and not add it to the dependencies list:

    $ npm install express --no-save

## Express Application Generator

Use the application generator tool, express-generator, to quickly create an application skeleton.

You can run the application generator with the npx command (available in Node.js 8.2.0).

  $ npx express-generator
For earlier Node versions, install the application generator as a global npm package and then launch it:

    $ npm install -g express-generator
    $ express -h (for help)
    $ npm start (to start the local server at specified port)
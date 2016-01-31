# ES2015 with unit tests
A bare-bones demo using the [Mocha Test Framework](https://mochajs.org/) and [Chai Assertion Library](http://chaijs.com/)

![Mocha Output](http://i.imgur.com/SkD1ADb.jpg)

###Dependencies
 - node/npm
 
###Installation
 - ```npm install```

###Transpile & Test
 - ```npm run transpile```
 - ```npm run test```

###How It Works
While the application code is written in ES2015, we can't unit test those files directly, they must be transpiled first. 

The ```npm run transpile``` command will transform each ES2015 file to ES5 under the ```/es5``` directory.

The ```npm run test``` command will instruct Mocha to run any test it finds in ```/test/unit```, and it will add the ```/es5``` directory to its ```NODE_PATH``` so it knows where to import application code from.

###Recommendations
I intentionally left this project very bare because I didn't want to confuse the key concepts. Here are some suggestions with where to go from here:
 
 - Make sense of what the [transpile & test scripts](https://github.com/curtis1000/es2015-unit-testing/blob/master/package.json#L7-L8) are doing
 - Setup a watch script so you don't have to manually transpile
 - Check out [faker](https://www.npmjs.com/package/faker) for generating dummy data in your tests
 - Check out [validator](https://www.npmjs.com/package/validator) for string validation
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/19e16209ef9e46108b89c4a6b3424f49)](https://www.codacy.com/gh/nejdetkadir/google-authentication/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nejdetkadir/google-authentication&amp;utm_campaign=Badge_Grade)

# google-authentication
Simple google authentication (Google+) with NodeJS & AngularJS. You can use everywhere, Enjoy it!

![cover](doc/cover.gif)

# Project setup
### Prerequirites
- NodeJS (>=10.x)
- npm

### Installation
Clone repo and install dependencies
``` bash 
$ git clone https://github.com/nejdetkadir/google-authentication.git
```
``` bash 
$ cd google-authentication
```
``` bash 
$ npm install && bower install
```

### Enviroment variables
Create a file named ".env" in the root directory and fill its contents as follows.
```ruby
MONGODB_STRING = XXX
GOOGLE_CLIENT_ID = XXX
GOOGLE_CLIENT_SECRET = XXX
GOOGLE_CALLBACK_URL = /auth/google/callback
SESSION_SECRET_KEY = XXX
```

### Run the app
``` bash 
$ npm start
```

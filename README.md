# <a href="https://magicpotionsite.herokuapp.com/" target="_blank">Curology Magic Potion Launch Site</a>


# tabBlock. 
<img style="text-align: center" height=200 alt="" src="https://cdna.artstation.com/p/assets/images/images/009/838/868/large/anna-emelyanova-bottle-3.jpg?1521148475"></img> A Tab Block built with ReactJS rendering JSON.
# Getting Started

1. Clone this repo
1. Run `npm install`
1. Run `npm run dev`


The Application is deployed on Heroku as [magicpotionsite] <a href="https://magicpotionsite.herokuapp.com/">magicpotionsite</a>


## Technologies used
- <a href="https://github.com/facebook/react" alt="">React</a>
- <a href="https://github.com/expressjs/express" alt="">Express</a>
- <a href="https://github.com/expressjs/express" alt="">mongo DB</a>

# Hello World!
## Hello World!
### Hello World!
#### Hello World!
##### Hello World!
(using the email)


# <a href="https://magicpotionsite.herokuapp.com/" target="_blank">Curology Magic Potion Launch Site</a>
#### This is the order page for the new curology skin care product
<img width=400 alt="" src="./client/public/curology.png" />

## Getting Started
### On the Browser
The Application is deployed on Heroku as <a href="https://magicpotionsite.herokuapp.com/">magicpotionsite</a>
Note that it may take a couple of seconds for the webpage to initially load as
the app is using the free web dyno which goes to sleep after 30-minutes of no web
traffic. Thus, there will be a short delay before the web dyno is active on initial req.

### On your Local Machine
To run the application on your local machine, clone the repository and install the dependencies
1. Run `npm install` to install dependencies for the server &&
2. Run `cd client && npm install` to install dependencies for client
3. Run `npm run dev` from the root directory to start both the server and client
The client will be running on localhost `3000` and the server on `5500`

## Technologies used
- <a href="https://github.com/facebook/react" alt="">React</a>
- <a href="https://github.com/expressjs/express" alt="">Express</a>
- <a href="https://github.com/expressjs/express" alt="">mongo DB</a>

## Front End Architecture
React was used for the front end architecture. This provides the flexibility to
build encapsulated compoenents that can be used to manage state like the form 
inputs in this case.
Controlled Component was used to manage the data from the form input elements
for validation. Error was handled by bindding catch to the post req. The error
object was then access that type of error is specific to the error status passed
in from the post end point before generating a useful message to the client on 
the error. 

Forms are validated in the front end to minimize server calls. On change, the 
validation function is invoked to provide prompts to the user if the information
provided is invalid.

## API Architecture
REST API design is implemented. This is to allow for handling multiple types of 
calls, handle different data formats and even change structurally depending on the
needs of the application.
The application have Apis for post, get, patch and delete. The current UI only
has access to the post `./magic` endpoint.
#### POST /magic 
This endpoint adds new order to the DB. Before adding the order, the checkOrder 
route middleware checks that the same user (using the email to check duplicates)
is not making more than 3 potions for a given month (using 28days). If a user's
current order quantity and the previous order(s) quantity is greater than 3, the
order is rejected with BAD REQUEST (400) status and a message to the user of 
exceeding 3 potions for the given month.
Note that the api does not check for duplicate names, as multiple of three orders 
can be made by the same user for a given month since the minimum quantity for any
given order is 1. However, for any order that makes the total (previous and current)
orders exceeds 3, it is rejected and not saved to the DB.
When post req is successful, the user receives a notification to this effect and 
the server responds with the uid of the order and a CREATED (201) status
#### GET /magic/<uid>
This endpoint retrieves the order with the given uid with a OK (200) status and 
the order on success. NOT FOUND (404) on failure
#### PATCH /magic/<uid>
This updates and an existing specific order with the given uid and respond the 
uid and the fulfilled column on success. And a NOT FOUND (404) on failure
#### DELETE /magic/<uid>
The delete endpoint deletes the order of the uid given with a resource deleted 
successfully response and NOT FOUND (404) on failure

## Data Schema
Mongoose was used to implement a typed schema with validations. And to ensure 
flexibility in data structure definition along with making the mongodb interaction
simple.
In addition to defining the structure and default values for the document, the schema
was used to enforce validation for all fields except the street2. This was to ensure
that all fields are properly filled to process client orders
2. Scaling
As the number of orders increase, more computing power will be needed to process 
previous orders - in order to avoid duplicates before accepting new ones - As the 
current design requires. This presents a pitfall as an inefficiently-designed 
aggregation for the database, in addition to over-use of indices.
To efficiently scale, first have to remove the potential of running through every 
document in the database multiple times. This can be avoided by restructuring the 
current design to save each orders to users account. Creating users account will 
optimize the specific amount of RAM and storage space for each compute unit.
By creating users and storing their orders under their account - updating the 
aggregations limit the amount of data being processed in each stage of the pipeline.
This can easily be done since mongoose is tolerant to updates to data schema.

## To improve the current application
1. Update the data schema and the checkOrder middleware to create users and store 
orders under respective users. This should improve the algorithm currently being used by the
checkOrder middleware to check previous orders only under the current user rather than 
going through every single documents in the db.
2. Use street address validation api like <a href="https://smartystreets.com/products/apis/us-street-api">SmartStreets</a>, to validate each address object before submitting the 
form to the server.
3. Provide more details to users on their previous orders to create a better 
user story, especially with regards to making orders of more than 3 potions in 
a one month period

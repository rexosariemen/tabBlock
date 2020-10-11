# tabBlock
A Tab Block built with ReactJS rendering JSON

# Getting Started

1. Clone this repo
1. Run `npm install`
1. Run `npm run dev`


# Curology Magic Potion Launch Site

=> introduction
![image] (https://cdna.artstation.com/p/assets/images/images/009/838/868/large/anna-emelyanova-bottle-3.jpg?1521148475)
This is the order page for the new curology skin care product

## Getting Started
### On the Browser
The Application is deployed on Heroku as [magicpotionsite] (https://magicpotionsite.herokuapp.com/). 
Note that it may take a couple of seconds for the webpage to initially load as
the app is using the free web dyno which goes to sleep after 30-minutes of no web
traffic. Thus, there will be a short delay before the web dyno is active again.

### On your Local Machine
To run the application on your local machine, clone the repository and install the dependencies

1. Run `npm install` to install dependencies for the server &&
2. Run `cd client && npm install` to install dependencies for client
3. Run `npm run dev` from the root directory to start both the server and client

## Technologies used
- [React] (https://github.com/facebook/react)
- [express] (https://github.com/expressjs/express)
- [mongoDB] (https://www.mongodb.com/)

## Front End Architecture
React was used for the front end architecture. This provides the flexibility to
build encapsulated compoenents that can be used to manage state like the form 
inputs in this case.
Controlled Component was used to manage the data from the form inputs elements
which form validation modules used for validation

Forms are validated in the front end to minimize server calls. On change, the 
validation function is invoked to provide prompts to the user if the information
provided is invalid.

## API Architecture
1. Restful Apis

2. Discussion on each apis -> the post and middleware

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
1. the data schema has to updated to create users and store orders under respective users. 
2. Use street address validation api like [SmartStreets] (https://smartystreets.com/products/apis/us-street-api), to validates each address object before submitting the 
form to the server.
3. Provide more details to users on their previous orders to create a better 
user story, especially with regards to making orders of more than 3 potions in 
a one month period

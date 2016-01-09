####

_This repo is my attempt to refactor my personal project...however instead of refactoring I decided to start from scratch._

I am creating a dashboard for a business to track stats and orders for their store. I started by creating a gulp file so testing, using SASS and the build would be seamless.

This project will need to have the following:
Routing that protects the information with a login.
Login form.
Ability to add users and differentiate between user permissions.
On the backend the server will need a script that can pull in data from an API on a schedule the API is providing information in XML so once it receives the info it will need to rewrite it to JSON and ensure it didn't receive duplicate data/order information.

From the app it needs to be able to make an API call to get realtime order and view whether the  order will be on time.

### Dashboard: ###
* List of current orders
* Flag orders that appear to be close to being late.
* Different views based on who is logged in. (ie. one view for a manager over multiple stores compared to an employee working at one store.)
* Ability to take in orders and push them to POS system taking advantage of their API.
* Ability to leave notes on accounts and orders.

In my attempt to rebuild this app I am starting with login information and API calls. I will then focus on how the information is presented to the user. I believe the user interaction with the app will be crucial and I want the users to feel the app has the same type of high end feel their store has. 

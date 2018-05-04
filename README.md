# Weekend Challenge 4 - Angular, Node, Express & SQL

Welcome to weekend challenge 4! This weekend, you will take on the role of an application developer for a real estate company. You will be working with data that we will be providing to you. After importing the data (instructions below), you will find information for properties that are either for "rent" or for "sale".

You job is to get this data onto the DOM. Use client side routing (`angular-route`) to display the rentals on one view and listings for purchase on another view. There should be two navigation links on the page allowing the user to switch between the two views.

> NOTE: Deploying to Heroku is **not** required for this assignment. We will cover deployment with SQL next week.

## Project Requirements

- [ ] Create a Full Stack application from the ground up using Angular, Node, Express, and SQL (SEAN stack)
- [ ] Work with the data set that we have provide for you
- [ ] Account for the different data properties ("rent" versus "sale") and ensure that this is noted on the display of the information, by listing "For Rent" or "For Sale" based on which of the two properties that it has.
- [ ] 3 views, 3 angular routes, each with a controller and template file. See mockups below.
- [ ] Implement a `Card`, a common user interface element.
 

## Importing the Provided Data File

You will need import the *listings.sql* file into your database. Either import the file or copy and paste all of the queries into Postico.


## Views and Layout

Mockup of a card-based layout. This is a guide for the Rental and Sale views below. Feel free to improvise.
[https://docs.google.com/drawings/d/1t-UDiuWOqXGgwBpL3Oi8B2tyjnSamFMLFavOuWLUb1c/edit?usp=sharing](https://docs.google.com/drawings/d/1t-UDiuWOqXGgwBpL3Oi8B2tyjnSamFMLFavOuWLUb1c/edit?usp=sharing)


### Home/Add Listing View/Route

- [ ] Create a client-side route, controller, and template file for the home page.
- [ ] Allow a user to add a property to the database on this view. You will need to give the user an option for either a Rental property or a Sale property.
- [ ] Allow the user to enter the name of one of the images provided to display with the new listing.


### Rental Property View/Route

- [ ] Create a client-side route, controller, and template file for Rental properties.
- [ ] Display only those properties that are For Rent.
- [ ] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.


### Sale Property View/Route

- [ ] Create a client-side route, controller, and template file for Sale properties.
- [ ] Display only those properties that are For Sale.
- [ ] Display the listings in "card" elements, including the associated image. Images have been provided for you and assigned to each property.


## Dealing The Cards

The Card interface component is very common across the webs. Bootstrap 4 includes a card element. 

Otherwise, creating one with your own CSS isn't so bad. W3 even has a page on it: [https://www.w3schools.com/howto/howto_css_cards.asp](https://www.w3schools.com/howto/howto_css_cards.asp)


## Tips

Don't get too hung up on the card and layout. Getting the data on the page is more important. Without the data, the application is useless. Spend your time wisely!


## Hard Mode

- [ ] Ability to delete an existing listing. Place the `delete` button on each listing card.
- [ ] Move all `$http` requests to an Angular Service


## Stretch Goals

- [ ] Add other images to your application
- [ ] Display the least expensive property featured prominently at the top of the view
- [ ] Ability to search or filter by various parameters (try doing this using a server side route with a query parameter)

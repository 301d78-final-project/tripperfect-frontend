# TripPerfect

## Authors: Marquesa Asmussen, Steve Ngo, Eddie Ponce, Katy Roffe, Cameron Walden

## PRODUCT NAME: TripPerfect

## Problem Domain

Everyone travels, but frequently are left wondering what to do in their new city. "Where is the best Japanese food?" "Are there cool local sights?" "Where can I get a taste of the local flavor?"... These are all questions we've faced while traveling. We want to create an app that will help these wayward travelers find their way in their travels

## MVP

- Home page
- Login page
- Search page
  - returns local events
- Favorites page
  - user can store favorite events
- About Us
  - user can learn about company/dev team

## Available APIs

PredictHQ - (https://www.predicthq.com)
Eventbrite (Links to an external site.) | Find events | OAuth | Yes | Unknown
Picatic (Links to an external site.) | Sell tickets anywhere | apiKey | Yes | Unknown
SeatGeek (Links to an external site.) | Search events, venues and performers | apiKey | Yes | Unknown
Ticketmaster (Links to an external site.) | Search events, attractions, or venues | apiKey | Yes | Unknown

## Wireframe

![screen shot of Wireframe](./docs/images/WireFrame.JPG)

## User Stories

[link to Basecamp User Stories Doc](https://3.basecamp.com/5207785/buckets/24316747/documents/4211985242)

_Our team's Basecamp account is not visible to the public. User stories are also displayed below._

Title: User 1 - Marquesa
User Story sentence: As a User, I want to be able to view an About Us page, so that I can learn more about the company
Feature Tasks:
Create a page with information about each of our Devs as well as the TripPerfect Company.
add links to each dev's Linkedin profile
Acceptance Tests:
Given that a user clicks the "About Us" link, when the page renders, then it will display dev and company information

Title:User 2 - Cameron
User Story sentence: As a user, I want to know in advance what activities I can do In a city I am traveling to
Feature Tasks: When a user enters a city they will be presented with events that are/will be happening
Acceptance Tests: Create a form that displays current events for a given city

Title: User 3 - Katy
User Story sentence: As a user, I'd like to be able to remove saved cities and events that no longer interest me.
Feature Tasks: Displays a button to remove items from their saved favorites
Acceptance Tests: Create a delete function that removes saved info from the database.

Title: User 4 - Eddie
User Story sentence: As a user, I'd like to be able to see a map with all activities offered in my searched area.
Feature Tasks: When a user searches for a specific area, a map should render with events pinged on the map. If possible, clicking on the pnged location should direct the user to the event information.
Acceptance Tests: Create a map feature that is dynamic and able to use location data to fetch event data.

Title: User 5 - alsoSteve
User Story sentence: As a user, I want to be able to save or highlight activities that I like so I don't have to write down or look back and forth through events.
Feature Tasks: Create a method of saving events to data base and display data separately.
Acceptance Tests: Log data into data base and be able to display logged data.

## Software Requirements

Link to [software requirements](./docs/requirements.md) doc

## Domain Model

![screen shot of Domain Model](./docs/images/301-DomainModel.jpg)

## DB Schema

![screen shot of DB Schema](./docs/images/DB-Schema.JPG)

## WRRC

![screen shot of WRRC diagram](./docs/images/Front-BackEnd.jpg)

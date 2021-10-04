# Software Requirements

## Vision

_What is the vision of this product?_

To provide Users with a unified, centralized place to keep track of all the activities (events, sights, restaurants) they want to take part in while on their trips.

_What pain point does this project solve?_

Not knowing what is availble to do in a new city that is relevant to the user.

_Why should we care about your product?_

Because we've all had the struggle of arriving in a new place and realizing we have no idea what we want to do or see. Google searches are a nice starting point, but can be overwhelming and repetitive in it's results.

## Scope (In/Out)

IN - What will your product do?

- The web app will provide a centralized repository for the User to store and view their activity choices.
- The web app will provide basic information on activities relevant to the User, based on User's entered criteria
- Users will be able to create thier own personalized profile
- Users profile will be password protected
- Users will be able to save their activity choices to a "Favorites" page
- Users will be able to delete activities from their "Favorites"
- Users will be able to view an "About Us" page

OUT - What will your product not do?

- The web app will not be an IOS or Android app
- The web app will not send reminders/push notifications for events

### Minimum Viable Product vs

- Login feature via Auth0
- Home page with Welcome message to orient new Users to the app
- About Us page with bios for the app authors
- Favorites page with saved activities rendered as cards
  - Each saved activity has a delete button
- Search page with returned results rendered as an image on clickable cards
  - Each modal populates [photo, name, description, location] from an API
  - Each modal has a save button

### Stretch

- rate button (out of 5 stars) for completed activities
- ability to upload photos and add a location tag

## Functional Requirements

For the purpose of this list "activity" means events, sights, and restaurants.

- User can create a profile in which to save their media choices
- User can log in and log out of their profile
- User can search for activiy on the Frontend site which queries an API on the Backend. The API on the Backend queries third-party APIs
- User can create and delete activity cards in a separate page
- User can read about the creators of the app in an About Us page

### Data Flow

#### Item Search Data Flow

- Frontend: User's search data is collected and forwarded to the Backend API. User does not require authentication to search.
- Backend API: Receives response resources from the third-party API server, transforms the shape into our domain model, adds a token to the data payload and returns the data to the Frontend.
  login

#### Login Data Flow

- Frontend: User's login data is collected, sent to Auth0.
- Backend: Queries the DB technology for User data matching the User's login credentials.
- Backend: Authenticates the User and sends a token to the Frontend.
  CRUD

CRUD Item Data Flow

- Frontend: User's item data is collected and forwarded to the Backend API. User requires authentication to use any Backend CRUD operations.
- Backend: Routes the request and prepares the resource for CRUD operations.
- Database: Based on the operation, the Database will CRUD the resource, returning success or failure to the Backend API.
- Backend: Returns a token and CRUD status code to the Frontend.

## Non-Functional Requirements

- Security: We are adding a login that associates a User to a profile. This will secure the User profile from unathourized access. This will be implemented with Auth0.

- Maintainablility: We are using component architecture with React. This will lower the effort of functional changes. The components source code is separated logically and physically on the file system so the team can maintain many components at the same time. This will make confllicts less likely, increasing maintainability.

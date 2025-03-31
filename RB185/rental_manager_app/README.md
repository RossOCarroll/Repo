Rental manager app

Ruby version - ruby 3.2.2
Browser - Google Chrome 134.0.6
PostgreSQL 17.2

Required:
  - Ruby
  - Bundler
  - PostgreSQL

Steps to install (Run in the command line): 
  - Install dependencies
    `bundle install`
  -Set up Data base
    - Create the database:
     `createdb rental_manager_db`
    - Run the schema setup:
     `psql -d rental_manager_db -f schema.sql`

Run The application(Using Bundler exec to ensure the correct gems are loaded):
  `bundle exec ruby manager.rb`

Log in info:
  username: admin
  password: 1234

This application is designed to help property owners and managers keep track of properties,
tenants, and other rental related information. 

The application features:
  - User Authentication
    - A User must log in before accessing the functionality.
    - I've opted to use sessions to maintain log in status.
    - New user are can sign up and have their own account and have access to their own
      data.
    - Users are stored in the users database table with and id, username, and encrypted password.

  - Property Management:
    - Users have access to stored properties in the properties database table with an id, name, address, and   manager_id that references the id in the users table.
    - The properties are listed on the users home page, pagination is used for navigation.
    - Users can add a new property by entering a name an address.
    - Users can edit property details.
    - Properties can be deleted.
    - Users are able to log out clearing the session.

  - Tenant Management
    - When a user clicks on an property they will go to a list of tenants that occupy that property.
    - Users can add new tenants to the property by entering a name, address( which is pre-filled but can changed), apartment number, phone number and the rent amount.
    - Tenants can be edited or removed from a property.

  - Validation and Security
    - Input fields are validated tp prevent empty or incorrect data.
    - If invalid data is input the page will display a flash message/messages that alert the user to wrong data.
    - Properties cannot have duplicate address.
    - The app sanitizes input to prevent SQL injection and JavaScript injection attacks.

Seed Data:
  - There is log in and pass word created:
    - Log in info:
        username: admin
        password: 1234
  - There is a 15 properties added.
  - The first property "Brickstone Towers" has 15 tenants.

Thank you testing the app, hope to hear from you soon!

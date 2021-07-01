# Time Manager

This is a single page web application to manage working hours and tasks. I started this hobby project to practice building SPAs and my craft.

## Demo

It is deployed to S3 and to a free Heroku dyno, so it might take some time to load the app the first time.

Demo: [time-manager.kalina.tech](http://time-manager.kalina.tech/)

Demo users:
- Regular user
  - Email: manager@manager.com
  - Password: 123123
- Manager user
  - Email: employee@employee.com
  - Password: 123123
- Admin user
  - Email: test@test.com
  - Password: 123123

The server restores the DB automatically every morning.

## The business details
- Users can create an account and log in
- Users can add (and edit and delete) tasks they have worked on, what date, for how long
- User can add a setting (*Preferred working hours per day*)
- If on a particular date a user has worked under the *PreferredWorkingHourPerDay*, these tasks are red, otherwise green
- Three roles with different permission levels:
  - regular users are only able to CRUD on their owned records
  - user managers are only able to CRUD users
  - admin can do anything
- Filter entries by date from-to
- Export the filtered tasks in HTML:
    - Date: 2018.03.31
    - Total time: 9h
    - Notes:
        - Note1
        - Note2
        - Note3

## The tech details

### Back end
- [GitHub repo](https://github.com/tothpeter/hobby-time-manager-api)
- It is a stateless API powered by Ruby on Rails (RoR).
- It uses the [JSON API](http://jsonapi.org/) specification for formatting the JSON output.
- It uses RSpec for automated tests to cover the core functionalities and to reach a given level of confidence.

### Front end
- [GitHub repo](https://github.com/tothpeter/hobby-time-manager-client)
- Extra emphasis on the rich frontend functionalities to improve UX.
- It is an Ember JS app with Bootstrap and SASS.
- Zero downtime deployment and canary versions using Redis on the back end.
- It uses QUnit for automated tests to cover the core functionalities and to reach a given level of confidence.

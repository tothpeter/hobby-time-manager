# Time Management App

This is a hobby application. I started it to practice building single page applications.

[Demo: time-manager.kalina.tech](http://time-manager.kalina.tech/)

Demo users:
- Regular user
  - email: manager@manager.com
  - password: 123123
- Manager user
  - email: employee@employee.com
  - password: 123123
- Admin user
  - email: test@test.com
  - password: 123123

The server restores the DB automatically every morning.

## Tech details of the app

### Backend
- [Git repo](https://github.com/tothpeter/hobby-time-manager-api)
- The backend is a Rails 5 API only app
- It uses the [JSON API](http://jsonapi.org/) recommendation for formatting the JSON output

### Frontend
- [Git repo](https://github.com/tothpeter/hobby-time-manager-client)
- The frontend is an Ember JS app with Bootstrap and SASS

## Features of the app
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

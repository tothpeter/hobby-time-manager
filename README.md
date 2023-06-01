# Time Manager

This is a single-page web application to manage working hours and tasks. I started this hobby project to practice building SPAs and honor my craft.

The app contains user management, different permission levels, and business rules. The emphasis is placed on rich front-end functionalities to improve UX. The back end is the JSON API powered by Ruby on Rails (RoR), while the front end is the Ember.js app using Bootstrap and Sass.

Zero-downtime deployment is achieved; it has a quick rollback and canary versions in production. The app uses the JSON API specification to format the JSON responses to unify the back and front end communication. It has automated tests to cover the core functionalities and reach a given level of confidence.

## Demo

Previously, the application was deployed to S3 and a free Heroku dyno.

But in the meantime Heroku shot down free dynos along with my app. I tried to redeploy it but the front-end developed some minor issues because of some deprecated dependencies. So now the build is broken :-(

## Functional requirements

- Users can create an account and log in
- Users can add, edit and delete tasks they have worked on
- Users can set a setting: *Preferred working hours per day*
- If on a particular date a user has worked under the *PreferredWorkingHourPerDay*, these tasks are red, otherwise green
- Three roles with different permission levels:
  - Regular users: They are only able to CRUD on their owned records
  - User managers: They are only able to CRUD users
  - Admins: They can do anything
- Filter entries by date from-to
- Export the filtered tasks in HTML:
    - Date: 2018.03.31
    - Total time: 9h
    - Notes:
        - Note1
        - Note2
        - Note3

## Technical details

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

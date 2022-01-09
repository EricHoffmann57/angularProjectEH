# AngularLPWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

## Video Game Collection

This project presents a video game collection in the form of collectible cards linked to a firebase database.
Each card possesses three buttons at the bottom whose opacity change on hover state:

one button to modify content in database
one button to delete card from database
one button to see a pop up modal for more details about this game

a form with required fields permits to add new cards

Two ways to sort data for client have been implemented:
- a search filter by keywords
- a select box with options to filter results: alphabetically, by dates, by rating,etc

each card has a real time "favorite" feature to sort cards by status.

This project is fully responsive to be used on mobiles.

## Modules used

- Angular 12.2.0
- fire 6.1.5
- firebase 8.6.7
- Angular material 12.2.13
- ng2-search-filter 0.5.1
- Angular flex layout 13.0.0-béta.36
- bootstrap 5.1.3

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

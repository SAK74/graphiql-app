# React.js 'GraphiQL IDE' app

## [Check out the project on Vercel](https://graphiql-app-rss.vercel.app/main)

## Developers:

* [Anastasiia Iuferova](https://github.com/AnastasiiaUferova)
* [Hanna Biruk](https://github.com/anna-biruk)
* [Sergij Kusyy](https://github.com/SAK74)


## Description

Final group task for [RS School React 2023 course]([https://startup-summer-2023-dev-task.super.site](https://rs.school/react/)). A playground/IDE for graphQL requests.

## Functionality

For unauthorized users:
* Sign in/ Sign up;
* Browse the welcome page;

For authorized users:
* Browse main page;
* Edit queries in the query editor;
* Edit variables for queries;
* Send queries;
* Get data at the response section;
* Explore documents for the API;

### API used

* [Rick and Morty GraphQL API](https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home) 

### Layout features

* Element positioning using Flexbox and Grid;
* Adaptive design principles are used in the project: it's optimized for different screen resolutions (mobile, tablet, desktop)
* Tailwind.css is used to style the layout

### Routes
* ```/ ```— welcome page
* ```/main``` — main page; GraphQL IDE
* ```/sign-in``` — sign-in
* ```/sign-up``` — sign-up

## Technologies used

* React.js Functional Components;
* React routing;
* React Hooks;
* TypeScript;
* Adaptive layout using flexbox and grid positioning;
* GraphQL;
* Apollo client;
* Firebase for authorization;
* CodeMirror;
* react-json-view for Response representation;
* react-i18next for localization;
* Tailwind.css;
* Git;

## Installation instructions:

```
git clone https://github.com/AnastasiiaUferova/graphiql-app.git

cd graphiql-app

npm i 

npm run start

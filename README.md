# expedite-dynamic-forms

This is a demo application of metadata-driven UI using Vue.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Code Description

The application is written in [Vue 3](https://vuejs.org/) composition api and [Tailwind CSS](https://tailwindcss.com/) with [Flowbite](https://flowbite.com/) UI lib on top of it.

All custom components used in this project have prefix `Ex..`.  
All UI components (inputs, toggle, select, textarea etc.) are in `src/components/ui` folder.  
The main component handling the form construction is `src/components/ExDynamicForm.vue`.

Form definition and data are separated as in the real scenario they can be on different endpoints. Form definition is stored as josn in `src/data/template.json` and is loaded via `src/composables/useTemplate` composable which is also simulating API request.  
Data operations with form (loading data for form, saving form and api request throwing an error) are simulated via `src/composables/useFakeApi` (they are not real API request as the name suggests).

When the application is run it is behaving as a new/create form. For simulating _loading/saving/error_ handling operations a particular code must be commented/uncommented in `src/App.vue` file.

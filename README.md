# Web Client & Server Prog. (CPNT-262)

### Author/Creator: Makayla Martineau Raymundo

## JSON gallery endpoint with fetch
This assignment includes:
- Create a 3-page website served with rendered view engine templates.
- Fetch a list of gallery items using fetch().
- Serve a JSON GET /gallery endpoint using app.get() and a custom module.
- Custom 404 page

The image gallery was used from assignment CPNT262-a2.


This project includes `npm`, `express`, `dayjs`, `dotenv`, `fetch()`, `routes`, `views` and a custom 404 page. All deployed from a live Heroku server.

## Links

GitHub Repository: https://github.com/MakaylaMR/cpnt262-a4

Heroku App: https://json-gallery.herokuapp.com/

## Server Setup

The project directory structure resembles as follows: 
```
project-root
└─ data
   └─ gallery.js (or similar)   
└─ node_modules 
└─ public
   ├─ css
   ├─ images
   └─ js
└─ routes
   └─ api
      └─ v0.js
   └─ index.js
└─ views
   └─ partials
      ├─ footer.ejs
      ├─ header.ejs
      └─ nav.ejs
   └─ pages
      └─ index.ejs
      ├─ login.ejs
      └─ register.ejs
└─ _connection.js
└─ .env
└─ .gitignore
└─ config.js
├─ package-lock.json
├─ package.json
└─ README.md
└─ server.js
```
Please note that the `_connection.js` and `.env` were optional. They are simply here for practice purposes, this does not affect the way the website functions.

### `express` + `ejs` + custom module + `dayjs`
`express`, `ejs` and `dayjs` can be found as dependencies in the `package.json` file:
- lines 16, 15 and 13 respectively 

`dayjs` was chosen as the additional npm module of my choice.

The custom module can be found in `data/gallery.js`

## Views
Load a view engine (ejs, pug)
- `package.json` line 15

HTML Endpoints
- `routes/index.js`
  - `GET /` lines 14-16
  - `GET /login` lines 19-21
  - `GET /register` lines 24-26

Each page must incorporate the following template variables:
- `config.js`
  - `siteTitle` line 2

- `routes/index.js`
  - `pageTitle` lines 15,20 and 25

View partials:
  - `views/partials`
    - Moved repeating page elements to template partials;
      - `header.ejs`
      - `head.ejs`
      - `nav.ejs` 
      - `footer.ejs`
  - View incorporated `dayjs` in `views/pages/login.ejs + register.ejs` 
    - line 12


## Gallery JSON API
Migrated frontend Javascript array to a custom Node module `/data/gallery.js`.
  - Object properties included:
    - id - Unique identifier (number);
    - title - Image heading (string);
    - description - Image description (string: 10-25 words);
    - width - Image width in pixels (number);
    - height - Image height in pixels (number);
    - pathURL - a local path/filename to your image file(string);
    - credit - The photo credit for the image such as a person, company or website (string).
    - creditURL - A link to the original photo, photographer's home page, license details, etc (string).


Created a JSON endpoint:
  - `routes/api/v0.js` line 3, 5-7

Using fetch() on the frontend, request your gallery array using your JSON endpoint. Refactor your gallery loop to use the fetched JSON array.
  - `public/js/main.js` line 6


## Heroku Deployment
Link to Heroku app above under links.


## Attributions (in-class)

| Person      |                                  Links/Contribution                                   |
| ----------- | :----------------------------------------------------------------------: |
|Aidan O'Reilly | Told me about `dayjs` and I could use that as another npm module. (Sent a screenshot of where he incuded `dayjs`)|
# Web Client & Server Prog. (CPNT-262)

### Author/Creator: Makayla Martineau Raymundo

## JSON Routes with Heroku and MongoDB Atlas  
This assignment includes:
- A Mongoose model for the JSON gallery route
- Migrated the data in the custom gallery module to MongoDB Atlas
- Connected Heroku app to an Atlas database
- Created a single image endpoint to my app

The image gallery was used from assignment CPNT262-a2.
## GET Endpoints
- GET `/`
  - https://jeeps-for-the-win.herokuapp.com/
- GET `/Register`
  - https://jeeps-for-the-win.herokuapp.com/register
- GET `/Login`
  - https://jeeps-for-the-win.herokuapp.com/login
## Links

GitHub Repository: https://github.com/MakaylaMR/cpnt262-a5

Heroku App: https://jeeps-for-the-win.herokuapp.com/

## Criteria
### Gallery `mongoose` model
The Mongoose model can be found in the `models` directory. It includes:
- `id`
- `title`
- `description`
- `width`
- `height`
- `pathURL`
- `linkURL`
- `credit`
- `creditLink`
- `alt`

 `require('./models/images.js)` was used in `import.js` file:
- line 8

Connected to MongoDB Atlas using my MONGODB_URL located inside the `.env` file.

Responds with a custom 500 Internal Server error page if connection fails located in the `server.js` file:
- line 29-36

## Rendered single image route
`GET /images/:id` can be found in `routes/images.js`:
- lines 12-24

`single-image.ejs` is rendered when the image is clicked on, this can be found in `views/pages`

All templates include Site title and Page title variables. They also include all partials from CPNT262-a4 as well as a additional partial which I called `hero.ejs`. 

The CSS and pages for this assignment have been cleaned up for better readability. 

### Database Import
Data was imported into MongoDB using `node import.js`.

The database seed file is located in `seeds/images.js`

### Heroku Deployment
Link to Heroku app above under links.



## Attributions

|Person/Company      |                                  Links                                   | License|
| ----------- | :----------------------------------------------------------------------: |--------------------------------: |
|Wolfgang Lutz | [Unsplash](https://unsplash.com/photos/yOujaSETXlo)|[Unsplash License](https://unsplash.com/license)|


## Attributions (in-class)

| Person      |                                  Links/Contribution                                   |
| ----------- | :----------------------------------------------------------------------: |
|Aidan O'Reilly | Help with general coding questions, was able to reference to their code to get an idea of whats expected.|
|Vitaly Gins| Had problems with getting to load MongoDB data into heroku app. Vitaly was able to help me in a zoom call and we figured it out.|


## Extras
If needed below is a copy of the database seed:
```
const jeeps = [
  {
    id: 1,
    title: 'Two Jeeps',
    description: '2003 brown/gold Jeep TJ on the left and a 2008 Jeep JK on the right. Both chilling in a field somewhere in Calgary, AB.',
    width: 1024,
    height: 683,
    pathURL:'images/couple-jeeps-medium.jpg', 
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'Two Jeeps'
  },
  {
    id: 2,
    title: 'Jeep TJ',
    description: '2003 brown/gold Jeep TJ out and about in it\'s natural habitat, probably somewhere in Waiparous.',
    width: 1024,
    height: 683,
    pathURL:'images/jeep-background-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'Two Jeeps'
  },
  {
    id: 3,
    title: 'Jeep TJ profile',
    description: '2003 brown/gold Jeep TJ in a field being super photogenic, with a tad bit of saturation, my pride and joy.',
    width: 1024,
    height: 683,
    pathURL:'images/jeep-profile-makayla-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'jeeps'
  },
  {
    id: 4,
    title: 'Jeep JK profile',
    description: '2007 black Jeep JK in the wild with a wide stance. Owner of the vehicle is Nathan Strome, also his pride and joy.',
    width: 1024,
    height: 683,
    pathURL:'images/jeep-profile-nathan-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'jeeps'
  },
  {
    id: 5,
    title: 'Jeep JK in BC',
    description: '2007 black Jeep JK going for a stroll in the mountains of British Columbia, carrying a whole lot of camping equipment.',
    width: 1024,
    height: 683,
    pathURL:'images/jeepjk-bctrip-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps in bc'
  },
  {
    id: 6,
    title: 'Two Jeeps airing down',
    description: 'Two jeeps, as you may have already guessed a 2003 brown/gold Jeep TJ and a 2007 black Jeep JK airing down their tires before taking these beauties rock crawling.',
    width: 1024,
    height: 683,
    pathURL:'images/jeepjk-jeeptj-airdown-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 7,
    title: 'Jeep TJ airing down',
    description: '2003 Jeep TJ airing down solo, along with a Tim Hortons coffee on the right flare.',
    width: 1024,
    height: 683,
    pathURL:'images/jeeptj-airdown-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 8,
    title: 'Jeep TJ going down a hill',
    description: '2003 Jeep TJ attempting to go down a very steep hole, the picture does not do the hole justice.',
    width: 1024,
    height: 682,
    pathURL:'images/jeeptj-hole-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 9,
    title: 'Jeep TJ side profile',
    description: '2003 Jeep TJ admiring the sunrise after being freshly washed. Jeep had to wake up at 5:00AM sharp to capture this image.',
    width: 1024,
    height: 683,
    pathURL:'images/jeeptj-sideprofile-medium.jpg',
    linkURL: 'blah',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  }
];
```
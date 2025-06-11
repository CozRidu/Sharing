# Backend API for Craigslist-Redesigned-Project

## Endpoints

- `GET /api/listings` — Get all listings
- `GET /api/listings/:id` — Get a single listing by ID
- `POST /api/listings` — Create a new listing (send JSON with title, price, description, images, category, location, seller, etc.)

## Example Listing JSON
```json
{
  "title": "Toyota Corolla 2013",
  "price": 7000,
  "description": "Well maintained, single owner, 7 images included.",
  "images": ["url1", "url2", ...],
  "category": "vehicles",
  "location": "Dallas",
  "seller": {
    "name": "John Doe",
    "rating": 4.8,
    "joinDate": "2020-01-01T00:00:00.000Z"
  }
}
```

## To Run
1. Set up your `.env` file with `MONGO_URI`.
2. Run `npm install` in the backend folder.
3. Start the server: `node server.js` or `npm start`.

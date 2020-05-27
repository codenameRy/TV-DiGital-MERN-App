//SERVER ROUTES
console.log(process.env.NODE_ENV)

//Ternary operator to toggle between development and production environments
export const USER_SERVER = process.env.NODE_ENV === "development" ?
"api/users":'https://quiet-forest-60957.herokuapp.com/api/users';

export const API_KEY = 'a0265ab770ca0c045998969cf812d64f';
export const API_URL = 'https://api.themoviedb.org/3/';

export const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
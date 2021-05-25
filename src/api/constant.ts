export const ApiRequestUrl = {
    BASE: process.env.CLIENT_API_ENDPOINT || 'https://newsapi.org/v2',
    EVERYTHING: 'everything',
}

export const API_KEY = "899587b51cfb427bb201f02ab6198656";

export const ApiErrorStatusCode = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_STATUS_ERROR: 500
}
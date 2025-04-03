require('dotenv').config();

export const port = process.env.PORT || 3000;
export const mongodbUri = process.env.MONGODB_URI;
export const jwtSecret = process.env.JWT_SECRET;z
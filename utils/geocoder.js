import NodeGeocoder from "node-geocoder";
import dotenv from "dotenv";
dotenv.config();

const options = {
  provider: "mapbox",

  // Optional depending on the providers
  apiKey: process.env.MAPBOX_API_KEY,
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

export default geocoder;

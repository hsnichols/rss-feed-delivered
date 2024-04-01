const { v5: uuidv5 } = require("uuid");

// grabbed the namespace uuid for podcasts from https://github.com/Podcast-Standards-Project/PSP-1-Podcast-RSS-Specification?tab=readme-ov-file#required-rss-namespace-declarations
const namespace = "ead4c236-bf58-58c6-a2c6-a6b28d128cb6";

// Define the name string from which the UUID will be generated
const name = "example.com";

// Generate UUID v5
const uuid = uuidv5(name, namespace);

console.log(uuid); // Output the generated UUID v5

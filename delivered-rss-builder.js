const xmlbuilder = require("xmlbuilder");
const { v4: uuidv4 } = require("uuid");

// Define feed data
const feedData = {
  title: "Delivered: An Agile Podcast",
  description:
    "Delivered is a podcast about the ins and outs of software product delivery, team dynamics, Agile principles, finding value for businesses, and managing client relationships.",
  items: [
    {
      title: "Delivered Episode -1 - Testing and Establishing Software",
      link: "https://youtu.be/GFv-LxnPXBE?si=FOgypdO_7P8xnnYO",
      description: "This is a test video to establish a baseline rss feed and test audio/video.",
      guid: "c26aad33-78d8-4a2c-8ed1-b5365884f065",
      pubDate: "Sun, 31 Mar 2024 10:30:00 GMT", // Example publishing date (RFC 822 format)
      season: 1,
      enclosure: {
        url: "https://github.com/hsnichols/rss-feed-delivered/raw/main/delivered_episode_-1.mp3", // URL of the multimedia attachment
        length: 1766584, // Length of the multimedia attachment in bytes
        type: "audio/mpeg", // MIME type of the multimedia attachment
      },
    },
  ],
};

// Generate XML structure
const feed = xmlbuilder
  .create("rss", { version: "1.0", encoding: "UTF-8" })
  .att("version", "2.0")
  .att("xmlns:itunes", "http://www.itunes.com/dtds/podcast-1.0.dtd") // iTunes namespace
  .att("xmlns:content", "http://purl.org/rss/1.0/modules/content/") // Content namespace
  .att("xmlns:atom", "http://www.w3.org/2005/Atom") // Atom namespace
  .att("xmlns:podcast", "https://podcastindex.org/namespace/1.0") //podcast namespace
  .ele("channel")
  .ele("title", "Delivered: An Agile Podcast")
  .up()
  .ele(
    "description",
    "Delivered is a podcast about the ins and outs of software product delivery, team dynamics, Agile principles, finding value for businesses, and managing client relationships."
  )
  .up()
  .ele("link", "https://www.youtube.com/playlist?list=PLAijQAnrOSbreG2diHx6lDgpdufD47gnH")
  .up()
  .ele("language", "en-us")
  .up()
  .ele("itunes:author", "NicholSound Studio")
  .up()
  .ele("copyright", "&#169; 2024 NicholSound Studio. All rights reserved.")
  .up()
  .ele("itunes:category", { text: "Business" })
  .ele("itunes:category", { text: "Entrepreneurship" })
  .up()
  .up()
  .ele("itunes:category", { text: "Technology" })
  .up()
  .ele("itunes:explicit", "false")
  .up()
  .ele("itunes:type", "episodic")
  .up()
  .ele("itunes:image")
  .att("href", "https://github.com/hsnichols/rss-feed-delivered/blob/main/Acklen%20Podcast%20Logo.jpg?raw=true")
  .up()
  .ele("podcast:guid", "5c384a23-1e21-5b76-a248-c32e04183434")
  .up()
  .ele("atom:link")
  .att("href", "https://hsnichols.github.io/rss-feed-delivered/feed.xml")
  .att("rel", "self")
  .att("type", "application/rss+xml")
  .up();

// Add items to the feed
feedData.items.forEach((item) => {
  const itemElement = feed
    .ele("item")
    .ele("title", item.title)
    .up()
    .ele("link", item.link)
    .up()
    .ele("description", item.description)
    .up()
    .ele("guid", item.guid)
    .up();

  // Add publish date tag if provided
  if (item.pubDate) {
    itemElement.ele("pubDate", item.pubDate);
  }

  // Add season tag if provided
  if (item.season) {
    itemElement.ele("itunes:season", item.season);
  }

  // Add enclosure tag if provided
  if (item.enclosure) {
    itemElement.ele("enclosure", {
      url: item.enclosure.url,
      length: item.enclosure.length,
      type: item.enclosure.type,
    });
  }
});

// Convert XML to string
const xmlString = feed.end({ pretty: true });

// Write XML to file (e.g., feed.xml)
const fs = require("fs");
fs.writeFileSync("feed.xml", xmlString);

console.log("RSS feed generated successfully.");
console.log("Here's a GUID for any new item that was added:");

// Generate a random GUID
const guid = uuidv4();

console.log(guid);
console.log("Now, add that to the xml file and the item component in the builder.");
console.log("Never ever change it once it's uploaded to github.");
console.log();

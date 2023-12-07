const RSSParser = require("rss-parser");
const fs = require("fs");
const path = require("path");

const parser = new RSSParser();
const rssFeedUrls = [
  "https://www.govinfo.gov/rss/bills.xml",
  "https://www.govinfo.gov/rss/bills-enr.xml",
  "https://www.govinfo.gov/rss/plaw.xml",
  "https://www.govinfo.gov/rss/comps.xml",
  "https://www.govinfo.gov/rss/statute.xml",
  "https://www.govinfo.gov/rss/uscode.xml",
];

const updateLastRun = () => {
  const dataPath = path.join(__dirname, "data", "data.json");
  const data = { lastRun: new Date().toISOString() };
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`Updated last run time: ${data.lastRun}`);
};

const processItem = async (item, folder) => {
  const contentHtmlMatch = item.content.match(/<a href="([^"]+)">TEXT<\/a>/);
  const contentHtml = contentHtmlMatch ? contentHtmlMatch[1] : null;
  const modsHtmlMatch = item.content.match(/<a href="([^"]+)">Descriptive Metadata \(MODS\)<\/a>/);
  const modsHtml = modsHtmlMatch ? modsHtmlMatch[1] : null;

  const dataObject = {
    title: item.title,
    content_html: contentHtml,
    mods_html: modsHtml,
    guid: item.guid,
    link: item.link,
    pubDate: item.pubDate,
  };

  const filePath = path.join(__dirname, "data", folder, `${item.guid}.json`);
  if (fs.existsSync(filePath)) {
    const existingData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (new Date(existingData.pubDate) >= new Date(item.pubDate)) {
      console.info(`Skipping existing item: ${item.guid}`);
      return;
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(dataObject, null, 2));
  console.log(`Saved: ${filePath}`);
};

const scrapeFeeds = async () => {
  try {
    for (const url of rssFeedUrls) {
      const feed = await parser.parseURL(url);
      const folder = url.split("/").pop().split(".").shift();
      for (const item of feed.items) {
        await processItem(item, folder);
      }
    }
    updateLastRun();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
};

// Main execution
(async () => {
  await scrapeFeeds();
})();

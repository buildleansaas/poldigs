const Parser = require("rss-parser");
const parser = new Parser();

const rssFeedUrl = "https://www.govinfo.gov/rss/bills.xml";

(async () => {
  try {
    const feed = await parser.parseURL(rssFeedUrl);
    feed.items.forEach((item) => {
      const contentHtmlMatch = item.content.match(/<a href="([^"]+)">TEXT<\/a>/);
      const contentHtml = contentHtmlMatch ? contentHtmlMatch[1] : null;

      if (contentHtml === null) console.error(`Could not find TEXT link for ${item.title}`);

      const modsHtmlMatch = item.content.match(/<a href="([^"]+)">Descriptive Metadata \(MODS\)<\/a>/);
      const modsHtml = modsHtmlMatch ? modsHtmlMatch[1] : null;

      if (modsHtml === null) console.error(`Could not find MODS link for ${item.title}`);

      console.log({
        title: item.title,
        content_html: contentHtml,
        mods_html: modsHtml,
        guid: item.guid,
        link: item.link,
        pubDate: item.pubDate,
      });
    });
  } catch (error) {
    console.error(`Error parsing the RSS feed: ${error.message}`);
  }
})();

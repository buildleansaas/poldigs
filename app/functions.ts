import { Legislator } from "./types";

async function fetchBioguideData(bioguideId: string): Promise<any> {
  if (!bioguideId) return {};

  const response = await fetch(
    `https://bioguide.congress.gov/search/bio/${bioguideId}.json`
  );

  if (!response.ok) {
    console.log(response);
    return {};
  }

  const data = await response.json();
  return data.data;
}

export async function fetchLegislators(
  stateCode: string,
  apiKey: string
): Promise<Legislator[]> {
  const response = await fetch(
    `http://www.opensecrets.org/api/?method=getLegislators&id=${stateCode}&apikey=${apiKey}&output=json`
  );

  if (!response.ok) return [];

  const data = await response.json();
  const legislators = await Promise.all(
    data.response.legislator.map(async (leg: any) => ({
      ...leg["@attributes"],
      bioguide: await fetchBioguideData(leg["@attributes"].bioguide_id), // Enriched data from Bioguide API
    }))
  );

  return legislators.map((leg) => ({
    cid: leg.cid,
    firstlast: leg.firstlast,
    lastname: leg.lastname,
    party: leg.party,
    office: leg.office,
    gender: leg.gender,
    first_elected: leg.first_elected,
    exit_code: leg.exit_code,
    comments: leg.comments,
    phone: leg.phone,
    fax: leg.fax,
    website: leg.website,
    webform: leg.webform,
    congress_office: leg.congress_office,
    bioguide_id: leg.bioguide_id,
    votesmart_id: leg.votesmart_id,
    feccandid: leg.feccandid,
    twitter_id: leg.twitter_id,
    youtube_url: leg.youtube_url,
    facebook_id: leg.facebook_id,
    birthdate: leg.birthdate,
    ...leg.bioguide,
  }));
}

export default fetchLegislators;

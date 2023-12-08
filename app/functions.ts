// utilities/getLegislators.ts
import { Legislator } from "../interfaces/Legislator";

export async function fetchLegislators(
  stateCode: string,
  apiKey: string
): Promise<Legislator[]> {
  const response = await fetch(
    `http://www.opensecrets.org/api/?method=getLegislators&id=${stateCode}&apikey=${apiKey}&output=json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch legislators");
  }

  const data = await response.json();

  // Assuming data is wrapped in a property, adjust as per actual response structure
  return data.response.legislator.map((leg: any) => ({
    cid: leg["@attributes"].cid,
    firstlast: leg["@attributes"].firstlast,
    lastname: leg["@attributes"].lastname,
    party: leg["@attributes"].party,
    office: leg["@attributes"].office,
    gender: leg["@attributes"].gender,
    first_elected: leg["@attributes"].first_elected,
    exit_code: leg["@attributes"].exit_code,
    comments: leg["@attributes"].comments,
    phone: leg["@attributes"].phone,
    fax: leg["@attributes"].fax,
    website: leg["@attributes"].website,
    webform: leg["@attributes"].webform,
    congress_office: leg["@attributes"].congress_office,
    bioguide_id: leg["@attributes"].bioguide_id,
    votesmart_id: leg["@attributes"].votesmart_id,
    feccandid: leg["@attributes"].feccandid,
    twitter_id: leg["@attributes"].twitter_id,
    youtube_url: leg["@attributes"].youtube_url,
    facebook_id: leg["@attributes"].facebook_id,
    birthdate: leg["@attributes"].birthdate,
  }));
}

export default fetchLegislators;

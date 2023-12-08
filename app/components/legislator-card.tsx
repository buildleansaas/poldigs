interface Legislator {
  cid: string;
  firstlast: string;
  lastname: string;
  party: string;
  office: string;
  gender: string;
  first_elected: string;
  exit_code: string;
  comments: string;
  phone: string;
  fax: string;
  website: string;
  webform: string;
  congress_office: string;
  bioguide_id: string;
  votesmart_id: string;
  feccandid: string;
  twitter_id: string;
  youtube_url: string;
  facebook_id: string;
  birthdate: string;
}

export const LegislatorCard: React.FC<{ legislator: Legislator }> = ({
  legislator,
}) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <h3 className="font-bold text-xl mb-2">{legislator.firstlast}</h3>
      <p>Party: {legislator.party}</p>
      <p>Office: {legislator.office}</p>
      <p>Gender: {legislator.gender}</p>
      <p>First Elected: {legislator.first_elected}</p>
      <p>Exit Code: {legislator.exit_code}</p>
      <p>Comments: {legislator.comments}</p>
      <p>Phone: {legislator.phone}</p>
      <p>Fax: {legislator.fax}</p>
      <p>
        Website: <a href={legislator.website}>{legislator.website}</a>
      </p>
      <p>
        Webform: <a href={legislator.webform}>{legislator.webform}</a>
      </p>
      <p>Congress Office: {legislator.congress_office}</p>
      <p>Bioguide ID: {legislator.bioguide_id}</p>
      <p>VoteSmart ID: {legislator.votesmart_id}</p>
      <p>FEC Candid: {legislator.feccandid}</p>
      <p>
        Twitter ID:{" "}
        <a href={`https://twitter.com/${legislator.twitter_id}`}>
          {legislator.twitter_id}
        </a>
      </p>
      <p>
        YouTube URL:{" "}
        <a href={legislator.youtube_url}>{legislator.youtube_url}</a>
      </p>
      <p>
        Facebook ID:{" "}
        <a href={`https://facebook.com/${legislator.facebook_id}`}>
          {legislator.facebook_id}
        </a>
      </p>
      <p>Birthdate: {legislator.birthdate}</p>
    </div>
  );
};

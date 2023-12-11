import { Legislator } from "../types";

import {
  BsEnvelope,
  BsFacebook,
  BsLink,
  BsMap,
  BsPrinter,
  BsTelephone,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

const districtStyles = [
  "bg-red-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-blue-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-green-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-yellow-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-purple-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-pink-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-indigo-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-gray-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-slate-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-orange-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-teal-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-cyan-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-emerald-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-lime-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-amber-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-fuchsia-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-violet-500 text-white px-2 py-1 rounded-md text-sm",
  "bg-rose-500 text-white px-2 py-1 rounded-md text-sm",
];

function yearsInOffice(firstElectedYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - firstElectedYear;
}

export const LegislatorCard: React.FC<{
  legislator: Legislator;
  index: number;
}> = ({ legislator, index }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <h3 className="font-bold text-xl mb-2">{legislator.firstlast}</h3>
      <div className="flex gap-2">
        <span
          className={
            legislator.party === "R"
              ? "bg-red-500 text-white px-2 py-1 rounded-md text-sm"
              : "bg-blue-500 text-white px-2 py-1 rounded-md text-sm"
          }
        >
          {legislator.party === "R" ? "Republican" : "Democrat"}
        </span>
        <span
          className={
            legislator.gender === "M"
              ? "bg-red-500 text-white px-2 py-1 rounded-md text-sm"
              : "bg-blue-500 text-white px-2 py-1 rounded-md text-sm"
          }
        >
          {legislator.gender === "M" ? "Male" : "Female"}
        </span>
        <span className={districtStyles[index]}>{legislator.office}</span>
      </div>
      <p className="text-sm my-2">
        In Office for {yearsInOffice(legislator.first_elected)} Years
      </p>
      <div>
        {legislator.phone && (
          <p className="flex gap-2 items-center">
            <BsTelephone /> {legislator.phone}
          </p>
        )}
        {legislator.fax && (
          <p className="flex gap-2 items-center">
            <BsPrinter />
            {legislator.fax}
          </p>
        )}
        {legislator.website && (
          <a
            href={legislator.website}
            className="flex gap-2 items-center hover:underline hover:text-blue-500"
          >
            <BsLink /> {legislator.website}
          </a>
        )}
        {legislator.webform && (
          <a
            href={legislator.webform}
            className="flex gap-2 items-center hover:underline hover:text-blue-500"
          >
            <BsEnvelope /> {legislator.webform}
          </a>
        )}
        {legislator.congress_office && (
          <p className="flex gap-2 items-center">
            <BsMap /> {legislator.congress_office}
          </p>
        )}
      </div>
      {/* <p>Bioguide ID: {legislator.bioguide_id}</p> attached as bioguide */}
      {/* <p>VoteSmart ID: {legislator.votesmart_id}</p> https://justfacts.votesmart.org/candidate/biography/15723/donald-trump */}
      {/* <p>FEC Candid: {legislator.feccandid}</p> https://api.open.fec.gov/developers/ */}
      <div>
        <h3>Social Media</h3>
        <div className="flex gap-2">
          <a href={`https://twitter.com/${legislator.twitter_id}`}>
            <BsTwitterX />
          </a>
          <a href={legislator.youtube_url}>
            <BsYoutube />
          </a>
          <a href={`https://facebook.com/${legislator.facebook_id}`}>
            <BsFacebook />
          </a>
        </div>
      </div>
      {legislator.birthdate && <p>Birthdate: {legislator.birthdate}</p>}
    </div>
  );
};

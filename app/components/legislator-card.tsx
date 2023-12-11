import Link from "next/link";
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

function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function createGoogleMapsLink(address) {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

const LegislatorCard: React.FC<{
  legislator: Legislator;
  index: number;
}> = ({ legislator, index }) => {
  return (
    <div className="max-w-md rounded overflow-hidden ring-2 bg-white p-4 space-y-2 w-full">
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
        {legislator.birthdate && (
          <>
            , <span>{calculateAge(legislator.birthdate)} years old.</span>
          </>
        )}
      </p>

      <div>
        <h3 className="font-bold mb-2">Get in Touch</h3>
        <div className="grid grid-cols-2 gap-2">
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
            <Link
              target="_blank"
              href={legislator.website}
              className="flex gap-2 items-center hover:underline hover:text-blue-500"
            >
              <BsLink /> Website
            </Link>
          )}
          {legislator.webform && (
            <Link
              target="_blank"
              href={legislator.webform}
              className="flex gap-2 items-center hover:underline hover:text-blue-500"
            >
              <BsEnvelope /> Contact
            </Link>
          )}
          {legislator.congress_office && (
            <Link
              target="_blank"
              href={createGoogleMapsLink(legislator.congress_office)}
              className="flex gap-2 items-center hover:underline hover:text-blue-500"
            >
              <BsMap /> Office
            </Link>
          )}
        </div>
      </div>
      {/* <p>Bioguide ID: {legislator.bioguide_id}</p> attached as bioguide */}
      {/* <p>VoteSmart ID: {legislator.votesmart_id}</p> https://justfacts.votesmart.org/candidate/biography/15723/donald-trump */}
      {/* <p>FEC Candid: {legislator.feccandid}</p> https://api.open.fec.gov/developers/ */}
      <div>
        <h3 className="font-bold mb-2">Social Media</h3>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href={`https://twitter.com/${legislator.twitter_id}`}
          >
            <BsTwitterX />
          </Link>
          <Link target="_blank" href={legislator.youtube_url}>
            <BsYoutube />
          </Link>
          <Link
            target="_blank"
            href={`https://facebook.com/${legislator.facebook_id}`}
          >
            <BsFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const LegislatorCards = ({
  legislators,
}: {
  legislators: Legislator[];
}) => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
    {legislators.map((legislator, i) => (
      <LegislatorCard index={i} legislator={legislator} key={legislator.cid} />
    ))}
  </div>
);

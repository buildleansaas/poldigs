import { states } from "../../../states";
import { fetchLegislators } from "../../../functions";
import { LegislatorCards } from "../../../components/legislator-card";
import Link from "next/link";

export default async function StatePage({ params }) {
  const state = states.find((s) => s.value.toLowerCase() === params.state);

  if (!state) return <div>State not found</div>;

  try {
    const apiKey = process.env.OPEN_SECRETS_KEY as string; // Replace with your actual API key
    const legislators = await fetchLegislators(state.key, apiKey);

    return (
      <div className="mt-4">
        <h1 className="text-sm">
          <span className="text-gray-500">
            <Link href="/" className="hover:text-blue-500 hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link
              href="/united-states"
              className="hover:text-blue-500 hover:underline"
            >
              United States of America
            </Link>{" "}
            / <Link href={`/united-states/${params.state}`}>{state.value}</Link>{" "}
          </span>
          / Legislators
        </h1>
        <LegislatorCards legislators={legislators} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching legislators:", error);
    return <div>Error loading data</div>;
  }
}

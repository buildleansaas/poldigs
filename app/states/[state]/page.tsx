import { states } from "../../states";
import { fetchLegislators } from "../../functions";
import { LegislatorCard } from "../../components/legislator-card";

export default async function StatePage({ params }) {
  const state = states.find((s) => s.slug.toLowerCase() === params.state);

  if (!state) return <div>State not found</div>;

  try {
    const apiKey = process.env.OPEN_SECRETS_KEY as string; // Replace with your actual API key
    const legislators = await fetchLegislators(state.key, apiKey);

    return (
      <div className="p-4">
        <div>
          <h1 className="text-xl">{state.value}</h1>
        </div>
        <div className="text-lg font-bold mt-2">Legislators</div>
        <div className="grid gap-8 grid-cols-3">
          {legislators.map((legislator) => (
            <LegislatorCard legislator={legislator} key={legislator.cid} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching legislators:", error);
    return <div>Error loading data</div>;
  }
}

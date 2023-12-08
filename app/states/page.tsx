import StatesGrid from "../components/states-grid";

export default function StatesPage() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-light">
        View Legislation and Politicans by State
      </h1>
      <StatesGrid />
    </div>
  );
}

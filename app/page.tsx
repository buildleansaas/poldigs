import Link from "next/link";
import StatesGrid from "./components/states-grid";

export default function Page() {
  return (
    <div className="mt-4">
      <h1 className="font-light text-3xl hover:underline hover:text-blue-500">
        <Link href="/united-states">United States of America</Link>
      </h1>
      <div className="mt-4">
        <StatesGrid />
      </div>
    </div>
  );
}

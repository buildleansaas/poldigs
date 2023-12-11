import Link from "next/link";
import StatesGrid from "../components/states-grid";

export default function Page() {
  return (
    <div className="mt-4">
      <h1 className="text-sm">
        <span className="text-gray-500">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>{" "}
        </span>
        / United States of America
      </h1>
      <div className="mt-4">
        <Link
          href="/united-states/states"
          className="font-light text-2xl hover:underline hover:text-blue-500"
        >
          Explore by State
        </Link>
        <StatesGrid />
      </div>
    </div>
  );
}

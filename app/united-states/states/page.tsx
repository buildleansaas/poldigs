import Link from "next/link";
import StatesGrid from "../../components/states-grid";

export default function StatesPage() {
  return (
    <div className="mt-4">
      <div>
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
            /{" "}
          </span>
          States
        </h1>
      </div>
      <StatesGrid />
    </div>
  );
}

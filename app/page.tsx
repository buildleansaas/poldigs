import Link from "next/link";
import StatesGrid from "./components/states-grid";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-xl">US Government Watch</h1>
      <div className="mt-4">
        <Link
          href="/states"
          className="font-bold text-lg hover:underline hover:text-blue-500"
        >
          States
        </Link>
        <StatesGrid />
      </div>
    </div>
  );
}

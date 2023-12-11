import Link from "next/link";
import StatesGrid from "./components/states-grid";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-sm">
        poldigs | digging up dirt on politicians and their friends
      </h1>
      <div className="mt-4">
        <Link
          href="/states"
          className="font-light text-2xl hover:underline hover:text-blue-500 hover:font-bold"
        >
          States
        </Link>
        <StatesGrid />
      </div>
    </div>
  );
}

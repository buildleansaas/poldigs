import Link from "next/link";
import { states } from "../states";
import { kebabStr } from "../utils";

export default function StatesGrid() {
  return (
    <div className="grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-3xl mt-4 gap-4">
      {states.map((state) => (
        <div>
          <Link
            className="hover:underline hover:font-bold text-blue-500 rounded-md"
            href={`/states/${kebabStr(state.value.toLowerCase())}`}
          >
            {state.value}
          </Link>
        </div>
      ))}
    </div>
  );
}

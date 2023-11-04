import { Suspense } from "react";

import Loading from "../loading";
import { SelectGames } from "./SelectGames";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Suspense fallback={<Loading />}>
      <SelectGames />
    </Suspense>
  </div>
);

export default Page;

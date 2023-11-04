import { Suspense } from "react";
import Loading from "../loading";
import Dashboard from "./Dashboard";
import ChatComponent from "./AskBucky";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  </div>
);

export default Page;

import { Suspense } from "react";
import {
  About,
  Hero,
  Features,
  Benefits,
  WhyGamify,
  GamesInfo,
  CoinExchange,
} from "../sections";
import Loading from "./loading";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <Suspense fallback={<Loading />}>
      <About />
      <Features />
      <GamesInfo />
      <Benefits />
      <CoinExchange />
      <WhyGamify />
    </Suspense>
  </div>
);

export default Page;

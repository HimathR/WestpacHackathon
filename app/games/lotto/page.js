"use client";
import Slots from "./Slots";
import { TypingText } from "../../../components";
import { SAVINGS_DATA } from "@/constants/data";
const page = () => {
  return (
    <div>
      <TypingText title="Kangaroo Lotto" textStyles="text-center" />
      <Slots savings={SAVINGS_DATA.currentBalance} />
    </div>
  );
};

export default page;

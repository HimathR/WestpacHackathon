"use client";
import Joey from "./Joey";
import { TypingText } from "../../../components";
import { SAVINGS_DATA } from "../../../constants/data";

const page = () => {
  return (
    <div>
      <TypingText title="Raise Bucky" textStyles="text-center" />
      <Joey
        lastWeekSavings={SAVINGS_DATA.balanceLastWeek}
        currentSavings={SAVINGS_DATA.currentBalance}
      />
    </div>
  );
};

export default page;

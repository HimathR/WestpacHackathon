import { TitleText } from "@/components";

const Unlockables = ({ coins, milestones }) => {
  return (
    <div>
      <TitleText title="Unlockables" textStyles="text-center" />
      <p className="flex text-body items-center justify-center text-xl p-4">
        As you save up more W coins, you will be able to unlock even cooler
        costumes for Bucky!
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-2 mx-4">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 md:p-6 lg:p-8 mb-8 rounded-lg shadow-md border border-gray-300 w-full sm:w-1/2 lg:w-1/4"
            style={{ opacity: coins >= item.milestone ? 1 : 0.4 }}
          >
            <img
              src={item.imgSrc}
              alt={item.clotheName}
              className="w-32 h-32 object-cover"
            />
            <p className="text-gray-700 text-xl md:text-2xl mt-2">
              {item.clotheName}
            </p>
            <p className="text-gray-700 text-md md:text-lg mt-1">
              {item.milestone} W Coins
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unlockables;

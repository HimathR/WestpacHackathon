import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[100px] sm:w-[155px] h-[100px] sm:h-[155px] relative animate-spin">
        <Image src="/cover.png" alt="stamp" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Loading;

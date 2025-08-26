import { CardContainer } from "@/components/card-container";
import HeartsAnimation from "@/components/hearts-animation";

const Page = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-pink-100 overflow-hidden">
      {/* hearts */}
      <HeartsAnimation />

      {/* cards */}
      <div className="flex items-center justify-center w-full max-w-md p-4">
        <CardContainer />
      </div>
    </div>
  );
};

export default Page;

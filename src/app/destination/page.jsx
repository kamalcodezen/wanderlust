import DestinationCard from "@/components/shared/DestinationCard";
import { destinationData } from "@/lib/data";

const DestinationPage = async () => {
  const destinations = await destinationData();

  return (
    <div className="min-h-screen w-10/12 mx-auto">
      <div className="grid grid-cols-4 gap-3">
        {destinations.map((des) => (
          <DestinationCard key={des._id} des={des} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;

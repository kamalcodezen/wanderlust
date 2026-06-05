import DestinationCard from "@/components/shared/DestinationCard";
import { auth } from "@/lib/auth";
import { destinationData } from "@/lib/data";
import { headers } from "next/headers";

const DestinationPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const destinations = await destinationData(token);

  console.log(token, "destination");

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

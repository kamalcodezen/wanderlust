import DestinationDetails from "@/components/destination/DestinationDetails";
import { auth } from "@/lib/auth";
import { singleDestinationData } from "@/lib/data";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;



  const destination = await singleDestinationData(id);
  // console.log(destination, "details");

  return (
    <div className="w-7/12 mx-auto min-h-screen">
      <DestinationDetails destination={destination} />
    </div>
  );
};

export default DestinationDetailsPage;

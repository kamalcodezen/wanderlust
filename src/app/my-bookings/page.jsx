import { auth } from "@/lib/auth";
import { myBookingDetailsById } from "@/lib/data";
import { headers } from "next/headers";

const BookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

 const bookingData= await myBookingDetailsById(user?.id);

  return (
    <div>
      <h2>my bookings {bookingData.length}</h2>
    </div>
  );
};

export default BookingPage;

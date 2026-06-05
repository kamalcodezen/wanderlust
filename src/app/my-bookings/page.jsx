import { auth } from "@/lib/auth";
import { myBookingDetailsById } from "@/lib/data";
import { headers } from "next/headers";
import Image from "next/image";
import { BookingCancelAlert } from "../../components/booking/BookingCancelAlert";

const BookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-2xl font-bold">Please login first</h1>
      </div>
    );
  }
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token)

  const bookings = await myBookingDetailsById(user.id, token);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="border p-5">
          <h2 className="text-xl font-semibold">No bookings found</h2>
        </div>
      ) : (
        <div className="space-y-5">
          {bookings.map((booking) => (
            <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
              <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                width={200}
                height={200}
                className="object-cover"
              />

              <div className="space-y-2">
                <h1 className="font-bold text-2xl">
                  {booking.destinationName}
                </h1>

                <p>
                  {new Date(booking.departureDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <p>
                  <span className="font-semibold">Booking ID:</span>{" "}
                  {booking._id}
                </p>

                <p className="text-3xl font-bold text-cyan-500">
                  ${booking.price}
                </p>

                <BookingCancelAlert bookingId={booking._id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingPage;

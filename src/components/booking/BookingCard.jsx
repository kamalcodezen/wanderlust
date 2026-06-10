"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { bookingDestinationData } from "@/lib/data";
import { Button, Card, DateField, Label } from "@heroui/react";
import { toast } from "react-toastify";


const BookingCard = ({ destination }) => {
  const { price, destinationName, imageUrl, country } = destination;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = async () => {
    
    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (!departureDate) {
      toast.error("Please select a departure date");
      return;
    }

    try {
      setIsBooking(true);

      const bookingDetails = {
        userName: user.name,
        userId: user.id,
        userImage: user.image,
        departureDate: new Date(departureDate),
        country,
        destinationName,
        imageUrl,
        price,
      };

      const result = await bookingDestinationData(bookingDetails);

      if (result) {
        toast.success("Booking completed successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create booking");
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <Card className="mt-5 rounded-none border p-5">
      <p className="text-sm text-muted-foreground">Starting from</p>

      <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>

      <p className="text-sm text-muted-foreground mb-4">per person</p>

      <DateField
        value={departureDate}
        onChange={setDepartureDate}
        className="w-full mb-4"
      >
        <Label>Departure Date</Label>

        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        isDisabled={isBooking}
        className="w-full rounded-none bg-cyan-500"
      >
        {isBooking ? "Booking..." : "Book Now"}
      </Button>
    </Card>
  );
};

export default BookingCard;

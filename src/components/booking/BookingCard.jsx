"use client"


import { Button, Card } from "@heroui/react";
import { DateField, Label } from "@heroui/react";
const BookingCard = ({ destination }) => {
  const { price, _id, destinationName, imageUrl, country } = destination;

  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
      <p className="text-sm text-muted">per person</p>

      <DateField
        //   onChange={setDepartureDate}
        className="w-[256px]"
        name="date"
      >
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        // onClick={handleBooking}
        className={"w-full rounded-none bg-cyan-500"}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;

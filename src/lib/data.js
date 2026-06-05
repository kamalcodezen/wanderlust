"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const destinationData = async (token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return await res.json();
};

export const singleDestinationData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`);
    return await res.json();
};

export const updateDestination = async (id, formData) => {
    const updateData = Object.fromEntries(formData.entries());

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
        revalidatePath("/destination");
        redirect("/destination");
    }

    return data;
};

export const deleteDestination = async (id) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
        revalidatePath("/destination");
        redirect("/destination");
    }

    return data;
};

export const bookingDestinationData = async (bookingDetails) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
    });

    return await res.json();
};

export const myBookingDetailsById = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return await res.json();
};

export const cancelBookingById = async (bookingId) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
        revalidatePath("/my-bookings");
    }

    return data;
};
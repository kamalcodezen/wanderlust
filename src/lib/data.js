"use server"


import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const destinationData = async () => {
    const res = await fetch("http://localhost:5000/destination")
    const data = await res.json()
    return data;
}

export const singleDestinationData = async (id) => {
    
    // console.log(id, "server")
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const data = await res.json();
    // console.log(data, "server")
    return data
}


export const updateDestination = async (id, formData) => {

    const updateData = Object.fromEntries(formData.entries());

    console.log(updateData, "data")

    const res = await fetch(
        `http://localhost:5000/destination/${id}`,
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
        revalidatePath("/destination")
        redirect("/destination")
    }

    // console.log("after res", data)

    // return data;
};
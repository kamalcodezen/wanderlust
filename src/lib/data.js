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
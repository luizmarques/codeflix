
import React from "react"
import { getUserById } from "../../../lib/settings";
import { notFound } from "next/navigation";

export default async function User ({params}: {params: {id:string}}) {
    const { id, name, username, website } = await getUserById(params.id);

    if (!name) {
        notFound();
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">User { params.id}</h1>
            <div className="border border-dashed border-red-500 p-4">
                <p>Name: {name}</p>
                <p>Id: {id}</p>
                <p>Username: {username}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    )
}
import { Metadata } from "next";
import React from "react";

type RoomDetailedProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: RoomDetailedProps): Promise<Metadata> {
  const data = await getData(params.id);
  return {
    title: data.title,
  };
}

async function getData(id: string) {
  const response = await fetch(`http://localhost:8000/room/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export default async function PageDetailed({ params }: RoomDetailedProps) {
  const { id } = params;
  const data = await getData(id);
  return (
    <div>
      Room id = {id} {data.title}
    </div>
  );
}

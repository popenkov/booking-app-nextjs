import { Button } from "@/compontents/UI/Button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Комната",
  description: "Created by Popenkov dev",
};

export default function Room() {
  return (
    <div>
      Room
      <Button />
    </div>
  );
}

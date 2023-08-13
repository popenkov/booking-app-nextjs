import Link from "next/link";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/booking/chose-date"}>Выбор даты</Link>
          <Link href={"/booking/chose-room"}>Выбор номера</Link>
        </li>
        {children}
      </ul>
    </div>
  );
}

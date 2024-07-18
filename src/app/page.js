import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <h1>Hello Josephine. Please Click on the Links below and check out the UIs. Thanks.</h1>
      <Link href={'/test-page'}>Desktop Page</Link>
      <Link href={'/figma-imports'}>IPhone 13 Pro Max 1 Page</Link>
      <Link href={'/figma-imports-3'}>IPhone 13 Pro Max 1 Register/SignUp Page</Link>
      <Link href={'/figma-imports-1'}>Static IPhone 13 Pro Max 3 Hotel BookingsPage</Link>
      <Link href={'/interactive-figma-imports-1'}>Interactive IPhone 13 Hotel Bookings Pro Max 3 Page</Link>
      <Link href={'/figma-imports-2'}>Interactive IPhone 13 Pro Max 3 Flight Bookings Page</Link>
      <Link href={'/favy-1'}>Favy Scents</Link>
    </main>
  );
}

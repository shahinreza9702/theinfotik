
import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p>দুঃখিত, পেজটি খুঁজে পাওয়া যায়নি।</p>
      <Link href="/" className="underline">
        হোম পেজে ফিরে যাও
      </Link>
    </main>
  );
}

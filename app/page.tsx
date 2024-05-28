import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href="/about">About</Link>
      <Link href="/games">Games</Link>
    </main>

  );
}

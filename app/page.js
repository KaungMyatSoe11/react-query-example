import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href={"/example-table"}>Table 1</Link>
        </li>
      </ul>
    </>
  );
}

import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-center h-[60px] bg-gray-900 text-gray-400 shadow-md">
      <ul className="flex items-center justify-center gap-[20px]">
        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href={"/about"}>About</Link>
        </li>

        <li>
          <Link href={"/contactUs"}>Contact Us</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

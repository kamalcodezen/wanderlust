import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/Wanderlast.png";

const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/" },
    { label: "My Bookings", path: "/" },
    { label: "Admin", path: "/" },
  ];

  return (
    <div className="w-11/12 mx-auto flex justify-between items-center py-4">
      <ul className="flex gap-4 items-center">
        {links.map((link, ind) => (
          <Link key={ind} href={link.path}>
            {link.label}
          </Link>
        ))}
      </ul>

      <div>
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <ul className="flex gap-4 items-center">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

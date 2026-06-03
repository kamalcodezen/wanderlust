"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/Wanderlast.png";
import { useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destination" },
    { label: "My Bookings", path: "/my-bookings" },
    { label: "Add Destinations", path: "/add-destination" },
  ];

  const { data, isPending } = useSession();

  const user = data?.user;

  if (isPending) {
    return <div className="w-11/12 mx-auto py-4">Loading...</div>;
  }

  return (
    <nav className="w-11/12 mx-auto flex justify-between items-center py-4">
      {/* Left Side */}
      <ul className="flex gap-4 items-center">
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="Wanderlust Logo" width={150} height={150} />
      </Link>

      {/* Right Side */}
      {user ? (
        <ul className="flex items-center gap-3">
          <li>
            <Avatar>
              <Avatar.Image
                src={user?.image || ""}
                alt={user?.name || "User"}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </Avatar.Fallback>
            </Avatar>
          </li>

          <li>
            <Button
              size="sm"
              variant="danger"
              className="rounded-none"
              // onPress={handleSignOut}
            >
              Logout
            </Button>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/profile">Profile</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>

          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/Wanderlast.png";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destination" },
    { label: "My Bookings", path: "/my-bookings" },
    { label: "Add Destinations", path: "/add-destination" },
  ];

  const { data, isPending } = useSession();
  const user = data?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  if (isPending) {
    return (
      <nav className="w-11/12 mx-auto flex justify-between items-center py-4">
        <p>Loading...</p>
      </nav>
    );
  }

  return (
    <nav className="w-11/12 mx-auto flex justify-between items-center py-4">
      {/* Left Side */}
      <ul className="flex gap-5 items-center">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`transition-colors ${
                pathname === link.path
                  ? "text-cyan-500 font-semibold"
                  : "hover:text-cyan-500"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logo */}
      <Link href="/">
        <Image
          src={logo}
          alt="Wanderlust Logo"
          width={150}
          height={150}
          priority
        />
      </Link>

      {/* Right Side */}
      {user ? (
        <div className="flex items-center gap-4">
          <Link href="/profile">
            <Avatar>
              <Avatar.Image
                src={user.image || ""}
                alt={user.name || "User"}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user.name?.charAt(0)?.toUpperCase() || "U"}
              </Avatar.Fallback>
            </Avatar>
          </Link>

          <span className="font-medium">{user.name}</span>

          <Button
            size="sm"
            variant="danger"
            className="rounded-none"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <ul className="flex gap-4 items-center">
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

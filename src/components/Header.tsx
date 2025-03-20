import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";

export default function () {
  const user = 1;
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          height={60}
          width={60}
          className="rounded-full"
        />
        <h1 className="flex flew-col pb-1 text-2xl font-semibold leading-6 ">
          AI <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                SignUp
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

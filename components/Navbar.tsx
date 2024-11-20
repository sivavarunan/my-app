import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "../app/auth";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import CreateIcon from '@mui/icons-material/Create';


const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo1.png" alt="logo" width={142} height={100} />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              {/* Create Button */}
              <Link href="/startup/create">
                <span className="hidden sm:block">Create</span>
                <CreateIcon className="h-6 w-6 sm:hidden" />
              </Link>

              {/* Logout Button */}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="flex items-center">
                  <span className="hidden sm:block">Logout</span>
                  <LogOut className="h-6 w-6 sm:hidden text-red-500" />
                </button>
              </form>

              {/* User Avatar */}
              <Link href={`/user/${session?.id}`}>
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || "User Avatar"}
                  />
                  <AvatarFallback>
                    {session?.user?.name?.slice(0, 2).toUpperCase() || "AV"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              {/* Login with Google */}
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <button type="submit" className="flex items-center gap-2">
                  <GoogleIcon className="h-6 w-6 sm:hidden text-blue-500" />
                  <span className="hidden sm:block">Login with Google</span>
                </button>
              </form>

              {/* Login with GitHub */}
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="flex items-center gap-2">
                  <GitHubIcon className="h-6 w-6 sm:hidden text-gray-800" />
                  <span className="hidden sm:block">Login with GitHub</span>
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

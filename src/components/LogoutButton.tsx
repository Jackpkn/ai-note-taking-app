"use client";
import { Loader2, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { tree } from "next/dist/build/templates/app-page";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;
    if (!errorMessage) {
      toast("You have been successfully logout");
      router.push("/");
    } else {
      toast(errorMessage);
    }
    setLoading(false);
  };
  return (
    <Button variant="outline" className="w-24" onClick={handleLogout}>
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
}

export default LogoutButton;

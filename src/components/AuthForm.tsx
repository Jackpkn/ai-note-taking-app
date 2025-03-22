"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { loginAction, signUpAction } from "@/actions/user";

type Props = {
  type: "Login" | "signUp";
};
export default function AuthForm({ type }: Props) {
  const router = useRouter();
  const isLoginForm = type === "Login";
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (formdata: FormData) => {
    startTransition(async () => {
      const email = formdata.get("email") as string;
      const password = formdata.get("password") as string;
      let errorMessage = null;
      let title = null;
      let description = null;
      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
        title = "Logged In";
        description = "You have been successfully login ";
      } else {
        errorMessage = (await signUpAction(email, password)).errorMessage;
        title = "sign-up";
        description = "You have been successfully signUp";
      }
      if (!errorMessage) {
        router.replace("/");
      }
    });
    router.replace("/");
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-xs flex items-center gap-1">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`text-blue-500 underline ${
              isPending ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

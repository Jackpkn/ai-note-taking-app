import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUp() {
  return (
    <div className="mt-20 flex flex-col flex-1 items-center ">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
        <AuthForm type="signUp" />
      </Card>
    </div>
  );
}

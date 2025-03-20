import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function LoginPage() {
  return (
    <div className="mt-20 flex flex-1 items-center flex-col">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
        <AuthForm type="Login" />
      </Card>
    </div>
  );
}

export default LoginPage;

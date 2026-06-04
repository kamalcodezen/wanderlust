"use client";
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email(
      {
        email: user?.email,
        password: user?.password,
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          toast.success(`Welcome Back ${user?.name}`);
          router.push("/");
          router.refresh();
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      },
    );

    console.log(data, error, "login");
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-default-500">Start your adventure with Wanderlust</p>
      </div>

      <Card className="max-w-lg mx-auto border rounded-none p-6">
        <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button
            className="w-full rounded-none bg-cyan-500 text-white"
            type="submit"
          >
            Login
          </Button>
        </Form>

        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />
          <span className="text-sm whitespace-nowrap text-default-500">
            Or sign in with
          </span>
          <Separator className="flex-1" />
        </div>

        <Button
          variant="outline"
          className="w-full rounded-none"
          onClick={handleGoogleSignin}
        >
          <FcGoogle size={20} />
          Sign in with Google
        </Button>
      </Card>
    </div>
  );
};

export default Login;

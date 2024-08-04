"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const API_ENDPOINT = "http://178.128.240.96/auth/jwt/create";

const formSchema = z.object({
  phone_number: z.string().min(1, { message: "Invalid phone number" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone_number: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { access, refresh } = responseData;

        document.cookie = `access_token=${access}; path=/;`;
        document.cookie = `refresh_token=${refresh}; path=/;`;
        localStorage.setItem("user_phone", values.phone_number);

        toast({
          title: "Successfully logged in",
        });

        setTimeout(() => {
          router.push("/market-intelligence");
        }, 3000);
      } else {
        const errorData = await response.json();
        toast({ title: errorData });
      }
    } catch (error) {
      toast({ title: "An error occurred during login, verify your internet" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen items-center flex flex-col justify-center">
      <Image
        src="/images/logo-big.png"
        className="w-auto h-full -rotate-[35deg] opacity-[0.03] absolute -bottom-44 -right-44 -z-10"
        alt="agriguard logo"
        width={1000}
        height={1000}
        priority
      />
      <div className="flex items-center justify-center py-12">
        <div className="w-[87vw] py-8 px-4 md:w-[28rem] lg:px-8 xl:px-[44px] lg:py-[65px] bg-[#F6F7F8] shadow-lg grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-xl lg:text-3xl font-bold">Login</h1>
            <p className="text-xs lg:text-sm text-balance text-muted-foreground">
              New user?{" "}
              <span>
                <Link
                  href="/auth/signup"
                  className="text-primary font-semibold"
                >
                  Create an account
                </Link>
              </span>
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="0204959555" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                      {/* <Link
                        href="/auth/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link> */}
                    </div>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="*******"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full lg:w-[105px] rounded-full ms-auto"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Continue"}
              </Button>
              <div className="hidden">
                <Image
                  src="/images/hr-line.svg"
                  alt="horizontal line"
                  className=" lg:w-[186px] w-[120px] mx-auto"
                  width={175}
                  height={0}
                />
                <p className="text-balance text-muted-foreground">Or</p>
                <Image
                  src="/images/hr-line.svg"
                  alt="horizontal line"
                  className="lg:w-[186px] w-[120px] mx-auto"
                  width={175}
                  height={0}
                />
              </div>
              <Button variant="outline" className="w-full hidden" type="button">
                <Image
                  src="/images/google-logo.svg"
                  alt="google logo"
                  className="mr-2"
                  width={24}
                  height={24}
                />
                Continue with Google
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

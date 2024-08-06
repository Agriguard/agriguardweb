"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z
  .object({
    first_name: z.string().min(3, { message: "First name is required" }),
    last_name: z.string().min(3, { message: "Last name is required" }),
    affiliation: z.string().min(3, { message: "Affiliation is required" }),
    user_type: z.string().min(3, { message: "Affiliation is required" }),
    username: z.string().min(3, { message: "Affiliation is required" }),
    pin: z.string().min(3, { message: "Affiliation is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    phone_number: z
      .string()
      .min(10, { message: "Password must be at least 10 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function Signup() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      affiliation: "Buyer",
      user_type: "BUYER",
      password: "",
      pin: "1234",
      phone_number: "",
      confirmPassword: "",
    },
  });

  const signup = async (data: FormData) => {
    const API_ENDPOINT = "/api/signup";
    const LOGIN_ENDPOINT = "/api/login";

    setLoading(true);

    const requestBody = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      username: data.username,
      phone_number: data.phone_number,
      pin: data.pin,
      affiliation: data.affiliation,
      user_type: data.user_type,
    };

    console.log("Sending POST request with the following data:", requestBody);

    try {
      const signupResponse = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (signupResponse.ok) {
        const responseData = await signupResponse.json();
        console.log(responseData)
        const userId = responseData.data.id;
        console.log(userId)

        localStorage.setItem("user_id", userId);
        toast({
          title: "Account successfully created",
        });

        const loginResponse = await fetch(LOGIN_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone_number: data.phone_number,
            password: data.password,
          }),
        });

        if (loginResponse.ok) {
          const loginData = await loginResponse.json();
          const { access, refresh } = loginData;

          document.cookie = `access_token=${ responseData.data.access}; path=/;`;
          document.cookie = `refresh_token=${ responseData.data.refresh}; path=/;`;
          localStorage.setItem("user_phone", data.phone_number);
          localStorage.setItem("user_email", data.email);
          localStorage.setItem("first_name", data.first_name);

          toast({
            title: "Successfully logged in",
          });
          setTimeout(() => {
            router.push("/market-intelligence");
          }, 3000);
        } else {
          const errorData = await loginResponse.json();
          toast({
            title: "Login failed",
            description: errorData.detail || "Please try logging in manually.",
            variant: "destructive",
          });
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        }
      } else {
        const contentType = signupResponse.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await signupResponse.json();
          console.error("Signup error:", errorData);
          toast({
            title: "Signup failed",
            description:
              errorData.message || "An error occurred during signup.",
            variant: "destructive",
          });
        } else {
          const errorText = await signupResponse.text();
          console.error("Signup error (non-JSON response):", errorText);
          toast({
            title: "Signup failed",
            description: "An unexpected error occurred. Please try again.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error("Signup request failed:", error);
      toast({
        title: "An error occurred during signup",
        description: "Unable to signup. Please try again.",
        variant: "destructive",
      });
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
      <div className="flex items-center justify-center py-5 lg:py-12">
        <div className="w-[87vw] py-8 px-4 md:w-[32rem] mx-auto lg:px-8 xl:px-[44px] bg-[#F6F7F8] shadow-lg grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-xl lg:text-3xl font-bold">Create an account</h1>
            <p className="text-xs lg:text-sm text-muted-foreground text-center lg:text-start">
              Already have an account?{" "}
              <span>
                <Link href="/auth/login" className="text-primary font-semibold">
                  Sign in here
                </Link>
              </span>
            </p>
            <Button variant="outline" className="w-full mt-4 hidden">
              <Image
                src="/images/google-logo.svg"
                alt="google logo"
                className="mr-2"
                width={24}
                height={24}
              />
              Continue with Google
            </Button>
          </div>
          <div className="hidden gap-5 items-center my-4">
            <Image
              src="/images/hr-line.svg"
              className="lg:w-[186px] w-[120px] mx-auto"
              alt="horizontal line"
              width={175}
              height={0}
            />
            <p className="text-balance text-muted-foreground">Or</p>
            <Image
              src="/images/hr-line.svg"
              className="lg:w-[186px] w-[120px] mx-auto"
              alt="horizontal line"
              width={175}
              height={0}
            />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(signup)} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="m@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="buyer"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="0204953994" type="phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="*******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="*******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-xs">
                By clicking Create account, I agree that I have read and
                accepted the 
                <span className="text-primary">
                  <Link href="">Terms of Use</Link>
                </span>
                 and 
                <span className="text-primary">
                  <Link href="">Privacy Policy.</Link>
                </span>
              </p>
              <div className="lg:flex items-center">
                <Button
                  type="submit"
                  className="w-full lg:w-fit mt-4 lg:mt-0 rounded-full ms-auto"
                  disabled={loading}
                >
                  {loading ? "Creating account..." : "Create account"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

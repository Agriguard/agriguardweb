import Link from "next/link";
import React from "react";
import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <div className="max-w-[65rem] mx-auto lg:grid grid-cols-5 px-4 xl:px-0">
      <div className="col-span-3">
        <ContactForm />
      </div>
      <div className="col-span-2">
        <h2 className="text-center lg:text-start text-5xl text-black/70 font-bold capitalize">
          Lets Connect
        </h2>
        <p className="my-5 text-center lg:text-start">
          Got a question or interested in exploring partnership opportunities?
          Use the form or send us a message on{" "}
          <span className="text-primary font-bold hover:underline">
            <Link href="https://wa.me/+233535254739" target="_blank">
              WhatsApp
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

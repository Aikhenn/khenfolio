"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import emailjs from "emailjs-com";
import FadeInSection from "@/lib/intersectionObserver";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import NextButton from "@/components/nextButton";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vbfq7mj", // replace with your EmailJS service ID
        "template_l157x9k", // replace with your EmailJS template ID
        { name: name, message: message },
        "wGzDtfoshJrG-GOoC" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setName("");
          setMessage("");
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };
  return (
    <div className="h-full flex justify-start flex-col">
      <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contacts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <FadeInSection>
        <div className=" bg-gray-300 w-full flex justify-center p-2 rounded-3xl">
          <h1 className="font-extrabold text-3xl">CONTACT ME</h1>
        </div>
      </FadeInSection>
      <section className="flex justify-center pt-12 gap-2 w-full ">
        <FadeInSection>
          <div className="flex flex-wrap gap-8 justify-center">
            <div
              className="w-80 h-40 border border-transparent hover:border-[#343DE0] rounded-2xl shadow-xl flex flex-col justify-center items-center gap-4
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[#343DE0]/40"
            >
              <Icon icon="mdi:email" width={60} color="#B55122" />
              <sub className="text-[#B55122]">aikhenpatino@gmail.com</sub>
              <h1>Send Email</h1>
            </div>

            <div
              className="w-80 h-40 border border-transparent hover:border-[#343DE0] rounded-2xl shadow-xl flex flex-col justify-center items-center gap-4
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[#343DE0]/40"
            >
              <Icon icon="mdi:phone" width={60} color="#1DAD32" />
              <sub className="text-[#1DAD32]">(+63) 961 310 7204</sub>

              <h1>Call Me</h1>
            </div>

            <Link
              href="https://github.com/Aikhenn"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <div
                className="w-80 h-40 border border-transparent hover:border-[#343DE0] rounded-2xl shadow-xl flex flex-col justify-center items-center gap-4
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[#343DE0]/40"
              >
                <Icon icon="entypo-social:github" width={60} />
              <sub>Aikhenn</sub>

                <h1>Visit Profile</h1>
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/aikhen-patino"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <div
                className="w-80 h-40 border border-transparent hover:border-[#343DE0] rounded-2xl shadow-xl flex flex-col justify-center items-center gap-4
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[#343DE0]/40"
              >
                <Icon
                  icon="entypo-social:linkedin"
                  width={60}
                  color="#2269B5"
                />
                <sub className="text-[#2269B5]">aikhen patiño</sub>

                <h1>Visit Profile</h1>
              </div>
            </Link>
          </div>
        </FadeInSection>

        {/* Contact Form */}
        <div className=" w-full max-w-lg">
          <FadeInSection>
            <form
              onSubmit={handleSend}
              className=" shadow-xl hover:shadow-[#343DE0]/40 rounded-2xl p-8 w-full max-w-lg"
            >
              <h2 className="text-2xl font-bold mb-1 text-center">
                Message me Directly
              </h2>
              <p className="mb-6 text-center">
                send me a message through email!
              </p>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border rounded-lg px-4 py-2"
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                  className="border rounded-lg px-4 py-2"
                />
                <Button
                  type="submit"
                  className=" font-semibold py-2 rounded-xl transition"
                >
                  Send Message
                </Button>
              </div>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </FadeInSection>
        </div>
      </section>

      <div className="mt-auto">
      <FadeInSection>
             <NextButton previous="My Skills" next="Home"/>
      </FadeInSection>
      </div>
      


    </div>
  );
}

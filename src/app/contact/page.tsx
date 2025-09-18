"use client";


import { useState } from "react";
import emailjs from "emailjs-com";
import FadeInSection from "@/lib/intersectionObserver";
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
    <section className="flex flex-col justify-around items-center gap-8 w-full px-80 ">
      {" "}
      {/* Contact Form */}{" "}
      <div className=" w-full max-w-lg">

        <FadeInSection>

      <form
        onSubmit={handleSend}
        className=" shadow-md rounded-2xl p-8 w-full max-w-lg"
      >
        {" "}
        <h2 className="text-2xl font-semibold mb-1 text-center">
          Contact Me
        </h2>{" "}
        <p className="mb-6 text-center">send me a message through email!</p>


        <div className="flex flex-col gap-4">
          {" "}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded-lg px-4 py-2"
          />{" "}
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
            className="border rounded-lg px-4 py-2"
          />{" "}
          <Button
            type="submit"
            className=" font-semibold py-2 rounded-xl transition"
          >
            {" "}
            Send Message{" "}
          </Button>{" "}
        </div>{" "}
        {status && <p className="mt-4 text-center">{status}</p>}{" "}
      </form>{" "}
    </FadeInSection>
      </div>

    </section>
  );
}

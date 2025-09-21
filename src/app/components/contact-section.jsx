"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Facebook, Linkedin, Github } from "lucide-react";

const FormField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  required,
}) => (
  <div className="relative">
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="block w-full px-4 py-3 rounded-xl appearance-none peer focus:outline-none focus:ring-0 shadow-inner neumorphic-inset transition-shadow duration-300"
    />
    <label
      htmlFor={name}
      className="absolute text-violet-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      {label}
    </label>
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.message || !form.name || !form.email) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        "service_caqbaoc",
        "template_6yip0er",
        {
          from_name: form.name,
          to_name: "NH Mizan ",
          from_email: form.email,
          to_email: "nhmizan999@gmail.com",
          message: form.message,
        },
        "ySvkxnpIiUjj_HB7R"
      )
      .then(() => {
        toast.success("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        toast.error("Sorry, failed to send your message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-4 lg:px-20 mt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 backdrop-blur-md rounded-3xl -z-10" />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#e5e7eb",
            color: "#1f2937",
            boxShadow: "5px 5px 10px #1e293b, -5px -5px 10px #334155",
          },
          success: { iconTheme: { primary: "#16a34a", secondary: "#f0fdf4" } },
          error: { iconTheme: { primary: "#dc2626", secondary: "#fef2f2" } },
        }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="p-8 rounded-3xl space-y-6 bg-gray-900/50 border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-pry">
            Get in Touch
          </h2>
          <p className="text-lg text-des">
            Feel free to reach out via the form or directly through my contact
            details.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-violet-400" />
              <span className="text-slate-200">nhmizan999@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-violet-400" />
              <span className="text-slate-200">+880 1783156390 </span>
            </div>
            <div className=" flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/1H6uEk7zxc/"
                target="_blank"
                rel="noreferrer"
                
              >
                <Facebook className="w-7 h-7 text-violet-400 hover:text-violet-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/nh-mizan-63326b2b7/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-7 h-7 text-violet-400 hover:text-violet-300" />
              </a>
              <a
                href="https://github.com/NH-Mizan"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-7 h-7 text-violet-400 hover:text-violet-300" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-8 rounded-3xl bg-gray-900/50 border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-2xl border-violet-700">
                <FormField
                  name="name"
                  label="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="border rounded-2xl border-violet-700">
                <FormField
                  name="email"
                  label="Your Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder=" "
                className="block w-full px-4 py-3 text-violet-800 rounded-xl appearance-none peer focus:outline-none focus:ring-0 resize-none shadow-inner border transition-shadow duration-300"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-violet-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Write your valuable message here...
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-lg text-violet-800 border disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </div>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

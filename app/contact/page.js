import React from "react";
import ContactForm from "@/layouts/contact";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Ready to scale your business? Reach out and let&apos;s explore how
            we can help.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="phone"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px transition-colors duration-200 ease-in-out has-checked:bg-black has-focus-visible:outline-2">
                  <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    aria-label="Agree to policies"
                    className="absolute inset-0 appearance-none focus:outline-hidden"
                  />
                </div>
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm/6 text-gray-600"
              >
                By selecting this, you agree to our{" "}
                <a
                  href="#"
                  className="font-semibold whitespace-nowrap text-gray-900"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <InteractiveHoverButton>Let&apos;s talk</InteractiveHoverButton>
          </div>
        </form>

        <div className="max-w-5xl w-full mx-auto p-6 md:p-12 mt-12 text-gray-100 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
          <span className="px-2 py-1 text-xs border border-gray-600 rounded-full text-gray-300">
            Reach Out To Us
          </span>
          <h1 className="text-4xl font-bold text-left mt-4">
            We&apos;d love to Hear From You.
          </h1>
          <p className="text-left mt-4 text-gray-300">
            Or just reach out manually to{" "}
            <Link
              href="mailto:contact@autopixel.in"
              className="text-gray-100 underline hover:text-white"
            >
              contact@autopixel.in
            </Link>
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Email Support */}
            <div>
              <svg
                className="text-gray-100 bg-gray-900 p-2.5 aspect-square rounded-full size-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-2.892 2.25L12 11.974 5.892 6.375zM4.125 17.625V7.808l7.115 6.522a1.125 1.125 0 0 0 1.52 0l7.115-6.522v9.817z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-lg font-bold mt-2">Email Support</p>
              <p className="text-gray-400 mt-1 mb-4">
                Our team can respond in real time.
              </p>
              <Link
                href="mailto:contact@autopixel.in"
                className="text-gray-100 font-semibold hover:underline"
              >
                contact@autopixel.in
              </Link>
            </div>

            {/* Visit Office */}
            <div>
              <svg
                className="text-gray-100 bg-gray-900 p-2.5 aspect-square rounded-full size-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25M19.5 9.375v9.75h-1.875v-9.75z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-lg font-bold mt-2">Visit Our Office</p>
              <p className="text-gray-400 mt-1 mb-4">
                Visit our location in real life.
              </p>
              <span className="text-gray-100 font-semibold">
                Ramohalli Kengeri hobli Bengaluru Karnataka 560074
              </span>
            </div>

            {/* Call Us Directly */}
            <div>
              <svg
                className="text-gray-100 bg-gray-900 p-2.5 aspect-square rounded-full size-10"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="m19 13.513-4.415-1.98-.017-.007a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125q.043-.051.08-.108a1.88 1.88 0 0 0 .148-1.782L7.488 2A1.88 1.88 0 0 0 5.539.89 5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513m-4.5 4.612A11.64 11.64 0 0 1 2.875 6.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.938-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.841c.883 1.808 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.036.105-.08l2.102-1.787 3.938 1.763a3.4 3.4 0 0 1-3.332 2.67"
                  fill="currentColor"
                />
              </svg>
              <p className="text-lg font-bold mt-2">Call Us Directly</p>
              <p className="text-gray-400 mt-1 mb-4">
                Available during working hours.
              </p>
              <span className="text-gray-100 font-semibold">
                +91 81058 71804
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

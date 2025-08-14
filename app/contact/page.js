import React from "react";
import ContactForm from "@/layouts/contact";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Contact Form Section */}
      <section className="isolate px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
        <ContactForm />
      </section>

      {/* Contact Info Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl w-full mx-auto p-6 sm:p-10 text-gray-100 bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] rounded-2xl">
          {/* Heading */}
          <span className="inline-block px-2 py-1 text-xs border border-gray-600 rounded-full text-gray-300">
            Reach Out To Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Or just reach out manually to{" "}
            <Link
              href="mailto:contact@autopixel.in"
              className="underline hover:text-white"
            >
              contact@autopixel.in
            </Link>
          </p>

          {/* Contact Methods */}
          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email Support */}
            <div>
              <div className="flex items-center justify-center bg-gray-900 text-gray-100 rounded-full size-12">
                <svg viewBox="0 0 24 24" fill="none" className="size-6">
                  <path
                    d="M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-2.892 2.25L12 11.974 5.892 6.375zM4.125 17.625V7.808l7.115 6.522a1.125 1.125 0 0 0 1.52 0l7.115-6.522v9.817z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-lg font-bold mt-3">Email Support</p>
              <p className="text-gray-400 text-sm mt-1 mb-3">
                Our team can respond in real time.
              </p>
              <Link
                href="mailto:contact@autopixel.in"
                className="font-semibold hover:underline"
              >
                contact@autopixel.in
              </Link>
            </div>

            {/* Visit Office */}
            <div>
              <div className="flex items-center justify-center bg-gray-900 text-gray-100 rounded-full size-12">
                <svg viewBox="0 0 24 24" fill="none" className="size-6">
                  <path
                    d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25M19.5 9.375v9.75h-1.875v-9.75z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-lg font-bold mt-3">Visit Our Office</p>
              <p className="text-gray-400 text-sm mt-1 mb-3">
                Visit our location in real life.
              </p>
              <p className="font-semibold text-sm sm:text-base">
                Ramohalli Kengeri Hobli, Bengaluru, Karnataka 560074
              </p>
            </div>

            {/* Call Us Directly */}
            <div>
              <div className="flex items-center justify-center bg-gray-900 text-gray-100 rounded-full size-12">
                <svg viewBox="0 0 21 21" fill="none" className="size-6">
                  <path
                    d="m19 13.513-4.415-1.98-.017-.007a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125q.043-.051.08-.108a1.88 1.88 0 0 0 .148-1.782L7.488 2A1.88 1.88 0 0 0 5.539.89 5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513m-4.5 4.612A11.64 11.64 0 0 1 2.875 6.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.938-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.841c.883 1.808 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.036.105-.08l2.102-1.787 3.938 1.763a3.4 3.4 0 0 1-3.332 2.67"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-lg font-bold mt-3">Call Us Directly</p>
              <p className="text-gray-400 text-sm mt-1 mb-3">
                Available during working hours.
              </p>
              <p className="font-semibold">+91 81058 71804</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

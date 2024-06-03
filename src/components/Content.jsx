import React from "react";
import f1 from "../assets/f1.png";
const Content = () => {
  return (
    <div className="container mx-auto max-w-[900px] p-2 my-4">
      {/* Paragraph */}
      <div className=" text-justify">
        <p className="font-semibold text-[20px] mt-6">How Does It Work</p>
        <p className="text-gray-800 py-4">
          The science behind Fix My Speakers is as fascinating as it is simple.
          When your phone takes a swim, water gets trapped in the tiny crevices
          of your speakers. Traditional drying methods (we're looking at you,
          rice) often fall short, leaving your audio muffled. By accessing the
          service, you allow the website to play a very specific buzzing sound.
          This sound creates vibrations at a frequency designed to shake the
          droplets loose, encouraging them to literally jump out of your speaker
          grill. It’s like a mini detox spa for your phone!
        </p>
      </div>

      {/* Cards */}
      <div className=" mt-4 xl:mt-8">
        <p className="text-[24px] font-semibold text-center my-4">
          H2 Featues of Tool
        </p>
        <div className="mx-6 mt-4 grid md:grid-cols-2 gap-2 lg:px-14 ">
          <div className="border mt-6 text-center shadow p-4 m-8 hover:shadow-lg">
            <div className="flex justify-center items-center mt-2">
              <img src={f1} alt="img" className="w-12" />
            </div>
            <div>
              <p className="font-semibold text-[18px] mt-4">100% Free</p>
              <p className="my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="border mt-6 text-center shadow p-4 m-8 hover:shadow-lg">
            <div className="flex justify-center items-center mt-2">
              <img src={f1} alt="img" className="w-12" />
            </div>
            <div>
              <p className="font-semibold text-[18px] mt-4">100% Free</p>
              <p className="my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="border mt-6 text-center shadow p-4 m-8 hover:shadow-lg">
            <div className="flex justify-center items-center mt-2">
              <img src={f1} alt="img" className="w-12" />
            </div>
            <div>
              <p className="font-semibold text-[18px] mt-4">100% Free</p>
              <p className="my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="border mt-6 text-center shadow p-4 m-8 hover:shadow-lg">
            <div className="flex justify-center items-center mt-2">
              <img src={f1} alt="img" className="w-12" />
            </div>
            <div>
              <p className="font-semibold text-[18px] mt-4">100% Free</p>
              <p className="my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Paragraph */}
      <div className="text-justify mt-4 text-gray-700 xl:mt-8">
        <div>
          <p className="font-semibold text-[18px]">
            The Plight of Soggy Speakers
          </p>
          <p className="py-4">
            We've all been there, haven’t we? An accidental spill, a pool
            mishap, or even getting caught in a downpour. Water and electronics
            mix about as well as oil and water—spoiler alert: not great. Your
            phone's speakers can suffer, affecting sound quality to a point
            where you're left asking, "Did my favorite song always sound like
            it's being sung underwater?"
          </p>
          <p className="py-4">
            Fix My Speakers is not just a plea to the tech gods; it's a real,
            live website dedicated to rescuing your phone's soggy speakers. But
            how? By using the magic of science! Specifically, by playing a
            particular sound frequency that literally buzzes the water right out
            of your speakers. Think of it as a mini sonic boom for your phone.
            Cool, right?
          </p>
        </div>
        <div>
          <p className="font-semibold text-[18px] py-4">How Does It Work</p>
          <p>
            The science behind Fix My Speakers is as fascinating as it is
            simple. When your phone takes a swim, water gets trapped in the tiny
            crevices of your speakers. Traditional drying methods (we're looking
            at you, rice) often fall short, leaving your audio muffled. By
            accessing the service, you allow the website to play a very specific
            buzzing sound. This sound creates vibrations at a frequency designed
            to shake the droplets loose, encouraging them to literally jump out
            of your speaker grill. It’s like a mini detox spa for your phone!
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-8 xl:mt-14">
        <p className="text-[20px] font-semibold xl:text-[25px]">FAQs</p>
        <div class="divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[16px] lg:text-[18px]">
                  {" "}
                  Question 1 ?
                </span>
                <span class="transition group-open:rotate-180 ml-20">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[#434061]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </details>
          </div>

          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[16px] lg:text-[18px]">
                  {" "}
                  Question 2 ?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[16px] text-[#434061]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </details>
          </div>

          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[16px] lg:text-[18px]">
                  {" "}
                  Question 2 ?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[16px] text-[#434061]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

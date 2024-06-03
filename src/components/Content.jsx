import React from "react";
import f1 from "../assets/f1.png";
const Content = () => {
  return (
    <div className="container xl:mx-auto">
      <div>
        <p className="text-[18px] font-semibold text-center mt-4">
          H2 Featues of Tool
        </p>
        <div className="mx-6 mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border mt-6 text-center shadow p-2">
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

          <div className="border mt-6 text-center shadow p-2">
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

          <div className="border mt-6 text-center shadow p-2">
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

          <div className="border mt-6 text-center shadow p-2">
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

      {/* FAQ */}
      <div className=" mx-2 lg:pr-[220px]">
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

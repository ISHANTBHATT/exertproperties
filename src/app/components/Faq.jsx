// "use client";

// import { useState } from "react";
// import { CircleIcon, Plus, Minus } from "lucide-react";
// import { BiSolidMessageRounded } from "react-icons/bi";
// const faqs = [
//   {
//     id: 1,
//     question: "How can I post my house for sale?",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//   },
//   {
//     id: 2,
//     question: "What is your realtor sale commission?",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//   },
//   {
//     id: 3,
//     question: "Which type of house do you take for promoting?",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//   },
//   {
//     id: 4,
//     question: "What's the average time to sale a house?",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//   },
// ];

// export function Faqs() {
//   const [openId, setOpenId] = useState(2);

//   const toggleFaq = (id) => {
//     setOpenId(openId === id ? 0 : id);
//   };

//   return (
//     <section className="w-full py-20 px-4 md:px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-center mb-6">
//           <div className="bg-[#EEEFF1] rounded-full p-2 flex items-center gap-2">
//             <div className="rounded-full bg-gray-400 p-2">
//               <BiSolidMessageRounded className="h-4 w-4 text-white" />
//             </div>
//             <span className="text-gray-700 text-sm font-semibold">FAQs</span>
//           </div>
//           {/* <div className="inline-flex items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm">
//             <div className="rounded-full bg-gray-400 p-2">
//               <BiSolidMessageRounded className="h-3 w-3 text-white" />
//             </div>
//             FAQs
//           </div> */}
//         </div>

//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
//           Frequently asked questions
//         </h2>

//         <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
//           Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam
//           ultrices augue convallis nunc ultrices amet consequat adipiscing.
//         </p>

//         <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10">
//           {faqs.map((faq) => (
//             <div key={faq.id} className=" py-6">
//               <button
//                 className="flex justify-between items-center w-full text-left"
//                 onClick={() => toggleFaq(faq.id)}
//                 aria-expanded={openId === faq.id}
//               >
//                 <h3 className="text-xl font-semibold">{faq.question}</h3>
//                 <div className="flex-shrink-0 ml-4">
//                   {openId === faq.id ? (
//                     <div className="bg-black text-white rounded-full p-2">
//                       <Minus className="h-4 w-4" />
//                     </div>
//                   ) : (
//                     <div className="border rounded-full p-2">
//                       <Plus className="h-4 w-4" />
//                     </div>
//                   )}
//                 </div>
//               </button>

//               {openId === faq.id && (
//                 <div className="mt-4 text-gray-600">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { BiSolidMessageRounded } from "react-icons/bi";

const faqs = [
  {
    id: 1,
    question: "How can I post my house for sale?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
  {
    id: 2,
    question: "What is your realtor sale commission?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
  {
    id: 3,
    question: "Which type of house do you take for promoting?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
  {
    id: 4,
    question: "What's the average time to sale a house?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
];

export function Faqs() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-[#EEEFF1] rounded-full p-2 flex items-center gap-2">
            <div className="rounded-full bg-gray-400 p-2">
              <BiSolidMessageRounded className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 text-sm font-semibold">FAQs</span>
          </div>
          {/* <div className="inline-flex items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm">
             <div className="rounded-full bg-gray-400 p-2">
               <BiSolidMessageRounded className="h-3 w-3 text-white" />
             </div>
             FAQs
           </div> */}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam
          ultrices augue convallis nunc ultrices amet consequat adipiscing.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-6 ">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <h3 className="text-xl font-semibold pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  <div
                    className={`rounded-full p-2 transition-all duration-300 ${
                      openId === faq.id
                        ? "bg-black text-white rotate-180"
                        : "border border-gray-300"
                    }`}
                  >
                    {openId === faq.id ? (
                      <Minus className="h-4 w-4 transition-transform duration-300" />
                    ) : (
                      <Plus className="h-4 w-4 transition-transform duration-300" />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id
                    ? "max-h-[1000px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  ArrowRight,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundForward } from "react-icons/io";

// This would typically come from a database or API
const agents = {
  "okey-okatta": {
    name: "OKEY OKATTA",
    username: "@okey-okatta",
    img: "/images/team1.jpeg",
    email: "property@johncarter.com",
    phone: "(414) 325 - 427",
    location: "San Francisco, CA",
    position: "Inmobiliary Agent",
    about:
      "Okey is the founder and Managing Director of Exert Properties . He holds a BSc in Banking & Finance from Imo State University Owerri Imo state (1999). An MBA In Banking & Finance from University of Nigeria Enugu Campus (2003). An MSc in International Oil & Gas Management from University Of Dundee, Dundee Scotland (2008). He retired from a 9 years successful banking career in 2008, he rose to the position of a deputy Manager with Fidelity Bank Plc Nigeria. With his sound financial background, he has managed many successful business organizations spanning thru oil & gas, hospitality and services. This experiences he has brought to fore in running of Exert properties from inception in 2021 to date. Exert properties have grown from been just a real estate firm to been a successful provider of high quality driven starter homes in Nigeria and the united states",
  },
  "adanna-okatta": {
    name: "Adanna Okatta",
    username: "@adanna-okatta",
    img: "/images/team2.jpeg",
    email: "jane@realestatehub.com",
    phone: "(310) 555 - 7890",
    location: "Los Angeles, CA",
    position: "Senior Property Consultant",
    about:
      "Adanna L. Okatta is the co-founder and  Director of Exert Properties, LLC. She holds a BSc in Biomedical Engineering from Tulane University (2002), an MPH in Epidemiology & Public Health from Yale University (2004), and a Doctor of Medicine from the University of Texas Health Center- San Antonio (2009). She has over fifteen years of women’s health consultation experience, specifically in the specialization of Maternal Fetal Medicine and high risk pregnancies. Her dedication to public service lead her to this real estate managing position. Access to outstanding homes is the building block for flourishing families in both in Nigeria and the United States.",
  },
  "blessing-young-harris": {
    name: "Blessing Young Harris",
    username: "@blessing-young-harris",
    img: "/images/team3.jpeg",
    email: "bob@urbanestate.com",
    phone: "(212) 678 - 1234",
    location: "New York, NY",
    position: "Urban Real Estate Specialist",
    about:
      "Blessing is a seasoned legal and credit risk professional with over 20 years of experience spanning legal advisory and credit risk management in some of Nigeria’s leading financial institutions, client relationship leadership, and strategic financial and legal oversight. She holds a Bachelor’s degree in Law from the Rivers State University of Science & Technology and an LLM in Petroleum Taxation & Finance from the prestigious CEPMLP, University of Dundee. She became a member of the Nigerian Bar Association in 2023. Throughout her career, Blessing has consistently delivered value by combining deep analytical skills with a client-centric approach—skills she now brings into the real estate space to help clients make confident and informed property decisions. Her unique background allows her to assess opportunities with both financial acumen and market insight, making her a trusted financial and legal advisor in every transaction.",
  },
  "bidemi-adeshina": {
    name: "Bidemi Adeshina",
    username: "@bidemi-adeshina",
    img: "/images/team4.jpeg",
    email: "alice@coastalhomes.com",
    phone: "(617) 222 - 3333",
    location: "Boston, MA",
    position: "Coastal Property Expert",
    about:
      "Bidemi is a seasoned legal and compliance professional with a rich academic and professional background. He holds an LLB from Lagos State University and an LLM from the University of Dundee, Scotland. He began his career in some of the most reputable law firms in Lagos and Abuja, Nigeria, where he gained extensive experience in legal advisory and regulatory compliance. After relocating to the United Kingdom, Bidemi worked on a variety of high-profile compliance projects at British American Tobacco, including the landmark EU Tobacco Products Directive. Currently based in the United States, he has, over the past five years, led multiple projects in supply chain and compliance, bringing a wealth of global experience and a strategic perspective to every initiative he manages.",
  },
};

export const getAgentData = async (slug) => {
  const key = slug.toLowerCase();
  if (!agents[key]) {
    throw new Error(`Agent not found: ${slug}`);
  }
  return agents[key];
};

export default async function AgentPage({ params }) {
  const { slug } = await params;
  const agent = await getAgentData(slug);

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="w-full px-40 p-4 flex gap-10">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden ">
          {/* Banner and Profile Section */}
          <div className="relative">
            {/* Banner Image */}
            <div className="h-48 bg-gray-800"></div>

            {/* Profile Content */}
            <div className="px-8 pb-8 pt-16 relative">
              {/* Profile Image */}
              <div className="absolute -top-16 left-8">
                <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32">
                  <Image
                    src={agent.img}
                    alt={agent.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Button */}
              <div className="absolute right-8 top-4">
                <div className=" items-center px-2 bg-black rounded-full inline-flex transform transition-transform duration-300 ease-in-out hover:scale-90 group hover:bg-neutral-800">
                  <button className="rounded-full p-2 font-semibold group group-hover:bg-neutral-800 text-white">
                    Contact us
                  </button>
                  <div className="rounded-full bg-white p-2 group">
                    <IoMdArrowRoundForward className="h-4 w-4 text-black" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Personal Info */}
                <div>
                  <h1 className="text-3xl font-bold mb-1">{agent.name}</h1>
                  <p className="text-gray-500 mb-6">{agent.username}</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="text-gray-500 mt-1" size={20} />
                      <div>
                        <p className="text-gray-500 text-sm">Email address</p>
                        <p>{agent.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-gray-500 mt-1" size={20} />
                      <div>
                        <p className="text-gray-500 text-sm">Phone number</p>
                        <p>{agent.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-gray-500 mt-1" size={20} />
                      <div>
                        <p className="text-gray-500 text-sm">Location</p>
                        <p>{agent.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="text-gray-500 mt-1" size={20} />
                      <div>
                        <p className="text-gray-500 text-sm">Position</p>
                        <p>{agent.position}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - About & Experience */}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-10 flex-1">
          <section>
            <h2 className="text-3xl font-bold mb-4">About me</h2>
            <p className="text-gray-700 mb-4">{agent.about}</p>
            {/* <p className="text-gray-700">{agent.experience.details}</p> */}
          </section>
        </div>
      </div>
    </div>
  );
}

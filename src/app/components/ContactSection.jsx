import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="/images/h6.png"
        alt="Modern building architecture"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-900/70 flex items-center">
        <div className="ml-auto w-full max-w-xl px-8 md:px-16 text-white">
          <div className="text-sm font-medium mb-4">00. CONTACT US</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            READY TO BUILD
            <br />
            YOUR DREAM
            <br />
            PROJECT?
          </h2>
          <button className="bg-white hover:bg-neutral-100 text-neutral-900 px-8 py-4 rounded-full font-medium transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

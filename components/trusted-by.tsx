import Image from "next/image";

const logos = [
  {
    id: 1,
    name: "Vercel",
    url: "/images/mest.png",
  },
  {
    id: 2,
    name: "Nextjs",
    url: "/images/ignitia.png",
  },
];

const TrustedBy = () => {
  return (
    <div className="w-full py-12">
      <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
        <div className="font-medium uppercase">Backed by</div>
        <div className="flex gap-5">
          {logos.map((logo) => (
            <div key={logo.id} className="w-32 h-16">
              <Image
                src={logo.url}
                width={100}
                height={100}
                className="w-full h-full px-2 brightness-0 dark:invert object-contain"
                alt={`${logo.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

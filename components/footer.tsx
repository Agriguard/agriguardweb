import Image from "next/image";
import Link from "next/link";

const navigation = {
  connect: [
    { name: "Book a Demo", href: "https://wa.me/+233535254739" },
    {
      name: "Privacy Policy",
      href: "https://docs.google.com/document/d/1rP84jXylffAvVQAA-VwLAR5lkJSSC35_1QD0YUffJj4/edit#heading=h.yv4ucnt8dvd2",
    },
    {
      name: "Terms of Use",
      href: "/",
    },
  ],
  company: [
    { name: "info@agriguard.org" },
    { name: "+233 535 254 739" },
    { name: "MEST Africa" },
    { name: "20 Aluguntugui St, East Legon" },
    { name: "Accra, Ghana" },
  ],
};

const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full py-12 bg-secondary px-4 xl:px-0"
    >
      <div className="mx-auto max-w-[65rem] px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <div className="flex gap-2 items-center">
              <Image
                priority={true}
                unoptimized={true}
                width={100}
                height={40}
                src="/images/agriguard-logo.svg"
                alt="logo"
                className="h-auto w-auto"
              />
              <p className="text-primary font-semibold uppercase">Agriguard</p>
            </div>
            <p className="text-sm max-w-sm leading-6 text-white">
              Agriguard is an agritech startup dedicated to empowering
              agricultural stakeholders across sub-Saharan Africa with increased
              yields, robust markets and related agri-services.
            </p>
            <div className="flex gap-4">
                <Link href="https://web.facebook.com/people/Agriguard/61555017154793/">
                    <Image src="/images/facebook.svg" alt="facebook logo" width={50} height={50} className=" stroke-white w-6 h-6"/>
                </Link>
                <Link href="https://www.linkedin.com/company/agriguard-ltd/">
                    <Image src="/images/linkedin.svg" alt="linkedin logo" width={50} height={50} className=" stroke-white w-6 h-6"/>
                </Link>
                <Link href="https://x.com/agri_guard">
                    <Image src="/images/twitter.svg" alt="twitter logo" width={50} height={50} className=" stroke-white w-6 h-6"/>
                </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="font-semibold leading-6 text-primary">
                Links
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-white hover:text-primary/90 dark:text-gray-600 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="font-semibold leading-6 text-primary dark:text-gray-200">
                  Contact Us
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <p
                        className="text-sm leading-6 text-white hover:text-white/90 dark:text-gray-600 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/50 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10">
          <p className="text-xs leading-5 text-white dark:text-gray-300">
            &copy; 2024 Agriguard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

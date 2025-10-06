import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-20 w-full">
      {/* Primary Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 border-b border-gray-700 pb-10">
        <p className="text-lg leading-relaxed">
          We guide, plan and design the future of the built environment. We are
          a global consultancy with advisory and technical expertise across more
          than 150 disciplines.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            "Markets",
            "About",
            "Services",
            "Careers",
            "Projects",
            "News",
            "Insights",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <a
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-white underline underline-offset-4 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Secondary Content */}
      <div className="container mx-auto mt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
            {[
              {
                name: "Modern Slavery Statement",
                link: "/about-us/corporate-reports/modern-slavery-and-human-trafficking-statement/",
              },
              { name: "Commitments", link: "/about-us/our-commitments/" },
              { name: "Legal", link: "/about-us/corporate-reports/legal/" },
              { name: "Policies", link: "/about-us/corporate-reports/policies/" },
              { name: "Privacy", link: "/about-us/corporate-reports/privacy-at-arup/" },
              { name: "Suppliers", link: "/about-us/our-suppliers/" },
              { name: "Cookies", link: "/cookies/" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-white underline underline-offset-4 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mt-4 text-sm">
            <span>© Arup 2025</span>
            <a href="/" aria-label="Homepage">
              <img
                src="/globalassets/images/site-assets/footer.svg"
                alt="Arup logo footer"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end gap-5">
          {[
            {
              name: "Facebook",
              img: "/globalassets/images/site-assets/facebook.png",
              link: "https://www.facebook.com/ArupGroup/",
            },
            {
              name: "Instagram",
              img: "/globalassets/images/site-assets/instagram.svg",
              link: "https://www.instagram.com/arupgroup/",
            },
            {
              name: "LinkedIn",
              img: "/globalassets/images/site-assets/linkedin.svg",
              link: "https://www.linkedin.com/company/arup/",
            },
            {
              name: "YouTube",
              img: "/globalassets/images/site-assets/youtube.svg",
              link: "https://www.youtube.com/@arupgroup",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={social.img}
                alt={`Follow us on ${social.name}`}
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

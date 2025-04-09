interface Link {
  label: string;
  href: string;
}

interface FooterLinkListProps {
  title: string;
  links: Link[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ title, links }) => (
  <div>
    <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{title}</h4>
    <ul className="space-y-1 sm:space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-600 hover:text-black text-sm sm:text-base"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Download", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 mt-16 md:mt-32">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <span className="font-['Pacifico'] text-xl sm:text-2xl mb-3 sm:mb-4 block">
              logo
            </span>
            <p className="text-gray-600 text-sm sm:text-base">
              Built for students, by students.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <FooterLinkList
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="border-t border-gray-200 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center text-gray-600">
          <p className="text-sm sm:text-base">
            © 2024 MeMeY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

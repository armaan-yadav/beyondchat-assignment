import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialMediaShare = () => {
  const socialIcons = [
    {
      Icon: FaFacebookSquare,
      color: "#1877F2",
      label: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      Icon: FaWhatsappSquare,
      color: "#25D366",
      label: "WhatsApp",
      url: "https://www.google.com",
    },
    { Icon: FaSquareXTwitter, color: "#000000", label: "X" },
    { Icon: FaInstagramSquare, color: "#E4405F", label: "Instagram" },
    { Icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn" },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg bg-white/5 backdrop-blur-sm p-4 shadow-lg">
        {socialIcons.map(({ Icon, label, url }) => (
          <div key={label} className="relative group">
            <a
              href={url}
              target="_blank"
              className="relative flex flex-col items-center transition-all duration-300 hover:z-10 hover:scale-125 cursor-pointer"
            >
              <Icon size={28} className="transition-all duration-300 " />
              <span className="absolute -bottom-6 text-xs font-medium opacity-0 transition-all duration-300 whitespace-nowrap">
                {label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaShare;

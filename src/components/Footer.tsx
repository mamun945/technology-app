import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto px-5 sm:px-6 lg:px-8 my-16 md:my-20">
      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Dev Stack logo" className="w-36" />

          <p className="text-sm leading-6 text-gray-600">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="flex flex-wrap gap-4 font-semibold text-sm">
            <span className="cursor-pointer hover:text-blue-500 transition">
              GitHub
            </span>
            <span className="cursor-pointer hover:text-blue-500 transition">
              Twitter
            </span>
            <span className="cursor-pointer hover:text-blue-500 transition">
              LinkedIn
            </span>
          </div>
        </div>

        {/* Product */}
        <div className="space-y-3">
          <h2 className="font-bold text-sm">PRODUCT</h2>

          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            Home
          </p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            Technologies
          </p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            Projects
          </p>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <h2 className="font-bold text-sm">COMPANY</h2>

          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            About
          </p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            Contact
          </p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            Careers
          </p>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h2 className="font-bold text-sm">LEGAL</h2>

          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            Privacy Policy
          </p>
          <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition">
            Terms of Service
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 mt-12 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p className="text-center md:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="cursor-pointer hover:text-black transition">
              Privacy
            </p>
            <p className="cursor-pointer hover:text-black transition">
              Terms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
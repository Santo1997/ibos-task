const Footer = () => {
  return (
    <>
      <footer className="footer bg-black text-white p-10">
        <aside className="w-[30vw]">
          <img src="./logo_2.png" className="w-52" />
        </aside>
        <nav className="text-[#81859F]">
          <h6 className="text-white">About US</h6>
          <a>Master Plan</a>
          <a>Jobs</a>
          <a>Invest</a>
          <a>Pressroom</a>
          <a>Blog</a>
          <a>Contact</a>
        </nav>
        <nav className="text-[#81859F]">
          <h6 className="text-white">Explore EEVE</h6>
          <a>Unlock my Robot Power</a>
          <a>Starlight</a>
          <a>Robot Platform</a>
          <a>EEVE Roadmap</a>
        </nav>
        <nav className="text-[#81859F]">
          <h6 className="text-white">Community & Support</h6>
          <a>Willow X Community</a>
          <a>Developer & Maker Access</a>
          <a>Special Cases</a>
        </nav>
      </footer>

      <footer className="bg-black rounded-b-xl">
        <div className="w-full mx-auto px-14 py-5">
          <hr className=" mx-auto border-gray-700 mb-8" />
          <div className="sm:flex sm:items-center sm:justify-between mb-8">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#81859F] sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  March22 Reacp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  General Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>

            <p className="flex items-center gap-1 text-[#81859F] text-sm">
              <span>
                <img src="./united-states-flag-icon.svg" className="w-4" />
              </span>
              <span>United State (English)</span>
            </p>
          </div>
          <span className="block text-sm text-[#323544] sm:text-center">EEVE © 2024. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

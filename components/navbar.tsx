import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 sticky top-0 bg-emerald-400">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h2 className="text-emerald-600 text-lg font-bold">App Logo</h2>
            <div className="flex justify-end items-center gap-6">
              <ul className="flex gap-x-6 text-white font-medium">
                <li>
                  <Link href="/services">
                    <p>Services</p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p>About Us</p>
                  </Link>
                </li>
              </ul>
              <button className="btn px-10">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

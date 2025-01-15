const Header = () => (
    <header className="relative z-10 flex items-center justify-between mb-6">
      <h1 className="relative text-4xl font-script text-black px-4 py-2 bg-gradient-to-r from-[#e5d1f9] via-[#98e4d6] to-[#d5aaf0] rounded-md">
        Aurora
      </h1>
      <button aria-label="Menu" className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>
  );
  
  export default Header;
  
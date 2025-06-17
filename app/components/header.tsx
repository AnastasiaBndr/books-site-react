import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 10) {
        header?.classList.add("small");
      } else {
        header?.classList.remove("small");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="header">
        <h1 className="header_logo">Resizing Fixed Header</h1>
      </div>
    </header>
  );
}

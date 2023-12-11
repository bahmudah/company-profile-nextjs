import Link from "next/link";

export default function NavItem({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-white text-lg text-opacity-60 font-semibold hover:text-opacity-95 hover:cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
}

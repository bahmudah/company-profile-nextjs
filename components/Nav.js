import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <ul className="flex justify-center space-x-10">
      <NavItem href="#home">Home</NavItem>
      <NavItem href="#about-us">About</NavItem>
      <NavItem href="#services">Services</NavItem>
      <NavItem href="#teams">Teams</NavItem>
    </ul>
  );
}

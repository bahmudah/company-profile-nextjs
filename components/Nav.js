import NavItem from './NavItem';

export default function Navbar() {
  return (
    <ul className='flex justify-center space-x-10'>
      <NavItem href='#profile'>Profile</NavItem>
      <NavItem href='#skills'>Skill</NavItem>
      <NavItem href='#projects'>Projects</NavItem>
      <NavItem href='#contact'>Contact</NavItem>
    </ul>
  );
}

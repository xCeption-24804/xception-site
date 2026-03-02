import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Logo } from "../components/Logo";

export function Header() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <Logo />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-3">xCeption</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About us</NavbarLink>
        <NavbarLink href="#">Robot</NavbarLink>
        <NavbarLink href="#">Plans/Goals</NavbarLink>
        <NavbarLink href="#">Contact us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

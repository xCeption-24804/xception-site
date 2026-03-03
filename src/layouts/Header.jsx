import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";
import { Logo } from "../components/Logo";

export function Header() {
  return (
    <Navbar>
      <NavbarBrand href="https://flowbite-react.com">
        <Logo />
        <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          xCeption
        </span>
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
      <DarkThemeToggle />
    </Navbar>
  );
}

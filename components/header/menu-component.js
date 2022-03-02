import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

function MenuComponent() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        size="lg"
        icon={<HamburgerIcon w={10} h={10} color="#1B1B1B" />}
        colorScheme="red"
        variant="solid"
      />
      <MenuList>
        <NextLink href={"/"} passHref>
          <MenuItem>Home</MenuItem>
        </NextLink>
        <NextLink href={"/showcase"} passHref>
          <MenuItem>Showcase</MenuItem>
        </NextLink>
        <NextLink href={"/contact"} passHref>
          <MenuItem>Contact</MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
}

export default MenuComponent;

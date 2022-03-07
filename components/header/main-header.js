import React from "react";
import Logo from "./logo";
import MenuContainer from "./menu-container";
import MenuLinks from "./menu-links";
import MenuToggle from "./menu-toggle";

export default function MainHeader(props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<MenuContainer {...props}>
			<Logo />
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</MenuContainer>
	);
}

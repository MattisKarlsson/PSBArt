import { Flex, Switch, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

export default function DarkModeSwitch() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<Flex position="fixed" top="1rem" right="1rem" align="center">
			<Switch color="yellow" isChecked={isDark} onChange={toggleColorMode} />
		</Flex>
	);
}

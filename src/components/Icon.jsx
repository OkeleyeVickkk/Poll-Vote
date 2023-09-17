import { InlineIcon } from "@iconify/react";
import React from "react";

const Icon = ({ iconName, style }) => {
	return <InlineIcon icon={iconName} className={`${style ? style : "w-5 h-5"} pointer-events-none select-none`} />;
};

export default Icon;

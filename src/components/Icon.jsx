import { InlineIcon } from "@iconify/react";
import { createPortal } from "react-dom";

export default function Icon({ iconName, style }) {
	return <InlineIcon icon={iconName} className={`${style ? style : "w-5 h-5"} pointer-events-none select-none`} />;
}

export function Loader() {
	return createPortal(
		<div className="fixed z-[10] inset-0 h-full w-full flex items-center justify-center bg-white">
			<div className="spinner"></div>,
		</div>,
		document.body
	);
}

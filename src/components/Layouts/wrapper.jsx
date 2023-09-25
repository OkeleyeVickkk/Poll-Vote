import { AnimatePresence, motion } from "framer-motion";

export default function TransitionWrapper({ children, className }) {
	return (
		<AnimatePresence>
			<motion.div className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

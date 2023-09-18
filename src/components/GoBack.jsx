import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function GoBack() {
	const navigate = useNavigate();
	return (
		<button
			type="button"
			className="font-semibold flex items-center gap-x-3 px-5 hover:text-primary bg-white hover:bg-primary/20 hover:border-primary/20 text-slate-600 border border-slate-300 py-3 rounded-md"
			onClick={() => navigate(-1)}>
			<Icon iconName="solar:arrow-left-line-duotone" />
			<span>Go Back</span>
		</button>
	);
}

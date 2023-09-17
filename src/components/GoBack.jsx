import { useNavigate } from "react-router-dom";

export default function GoBack() {
	const navigate = useNavigate();
	return (
		<div>
			<button type="button" className="bg-primary font-semibold px-10 rounded-sm text-white hover:bg-primary-dark py-3" onClick={() => navigate(-1)}>
				Go Back
			</button>
		</div>
	);
}

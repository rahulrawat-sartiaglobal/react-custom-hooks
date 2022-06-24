import { useState } from "react";

const useCopy = () => {
	const [isCopied, setIsCopied] = useState(false);
	const handleCopy = (data: string) => {
		if (typeof data === "string") {
			navigator.clipboard.writeText(data);
			setIsCopied(true);
			alert("Copied => " + data);
		} else {
			setIsCopied(false);
			console.error(
				`Cannot copy typeof ${typeof data} to clipboard, must be a string or number.`
			);
		}
	};
	return [isCopied, handleCopy] as const;
};
export default useCopy;

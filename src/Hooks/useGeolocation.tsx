import { useEffect, useState } from "react";

const useGeolocation = () => {
	const [location, setLocation] = useState({
		lat: "",
		long: "",
	});
	const [error, setError] = useState("");
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	}
	function showPosition(position: any) {
		// x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
		setLocation({
			lat: position.coords.latitude,
			long: position.coords.longitude,
		});
	}

	function showError(error: any) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				setError("User denied the request for Geolocation.");
				break;
			case error.POSITION_UNAVAILABLE:
				setError("Location information is unavailable.");
				break;
			case error.TIMEOUT:
				setError("The request to get user location timed out.");
				break;
			case error.UNKNOWN_ERROR:
				setError("An unknown error occurred.");
				break;
		}
	}
	useEffect(() => {
		getLocation();
	}, []);

	return [location, error] as const;
};
export default useGeolocation;

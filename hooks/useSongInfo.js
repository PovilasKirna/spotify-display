import { useState, useEffect } from "react";
import useSpotify from "./useSpotify";

function useSongInfo() {
	const spotifyApi = useSpotify();
	const [track, setTrackInfo] = useState(null);
	useEffect(() => {
		const fetchSongInfo = async () => {
			const trackInfo = await fetch(
				"https://api.spotify.com/v1/me/player/currently-playing",
				{
					headers: {
						Authorization: `Bearer` + spotifyApi.getAccessToken(),
					},
				}
			).then((response) => response.json());
			setTrackInfo(trackInfo);
		};

		fetchSongInfo();
	}, [track, spotifyApi]);

	return track;
}

export default useSongInfo;

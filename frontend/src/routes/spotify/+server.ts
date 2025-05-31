import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import {
    getAccessToken,
    currentlyPlaying,
    topTracks,
} from "$lib/server/spotify.server";
import type { SpotifyTrack } from "$lib/types/spotify";

export const GET: RequestHandler = async () => {
    try {
        const accessToken = await getAccessToken();
        const nowPlaying = await currentlyPlaying(accessToken);

        let tracks: SpotifyTrack[] = [];
        try {
            tracks = await topTracks(accessToken);
        } catch (error) {
            console.error("Error fetching top tracks:", error);
        }

        return json({
            isPlaying: nowPlaying?.isPlaying || false,
            title: nowPlaying?.title || "",
            artist: nowPlaying?.artist || "",
            albumImageURL: nowPlaying?.albumImageURL || "",
            songURL: nowPlaying?.songURL || "",
            nowPlaying: nowPlaying?.nowPlaying || "",
            topTracks: tracks,
        });
    } catch (error) {
        console.error("API error:", error);
        return json({
            isPlaying: false,
            title: "",
            artist: "",
            albumImageURL: "",
            songURL: "",
            nowPlaying: "",
            topTracks: [],
        });
    }
};

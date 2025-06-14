import {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN,
} from "$env/static/private";
import * as SpotifyTypes from "$lib/types/spotify";

export const getAccessToken = async (): Promise<string> => {
    const refresh_token = SPOTIFY_REFRESH_TOKEN;
    const clientID = SPOTIFY_CLIENT_ID;
    const clientSecret = SPOTIFY_CLIENT_SECRET;

    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to fetch access token");
    }

    const accessTokenData = await res.json();
    const accessToken = accessTokenData.access_token;

    if (!accessToken) {
        throw new Error("Failed to fetch access token");
    }

    return accessToken;
};

export const currentlyPlaying = async (
    accessToken: string
): Promise<SpotifyTypes.CurrentlyPlayingTrack | null> => {
    const res = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    // successful response but nothing returned
    if (res.status === 204) {
        return null;
    }

    // actual error with the request
    if (!res.ok) {
        throw new Error("Failed to fetch currently playing track");
    }

    const data = (await res.json()) as SpotifyTypes.CurrentlyPlayingResponse;

    // nothing is playing
    if (data.item === null) {
        return null;
    }

    const isPlaying = data.is_playing;
    const title = data.item.name;
    const artist = data.item.artists
        .map((_artist: SpotifyTypes.Artist) => _artist.name)
        .join(", ");
    const albumImageURL = data.item.album.images[0].url;
    const songURL = data.item.external_urls.spotify;

    return {
        isPlaying,
        title,
        artist,
        albumImageURL,
        songURL,
        nowPlaying: `${title} by ${artist}`,
    };
};

export const topTracks = async (
    accessToken: string
): Promise<SpotifyTypes.SpotifyTrack[]> => {
    const res = await fetch(
        "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Top tracks API error details:", {
            status: res.status,
            statusText: res.statusText,
            errorData,
        });
        throw new Error(
            `Failed to fetch top tracks: ${res.status} ${res.statusText}`
        );
    }

    if (res.status === 204) {
        return [];
    }

    const data = (await res.json()) as SpotifyTypes.TopTracksResponse;
    const { items } = data;

    if (!items || items.length === 0) {
        return [];
    }

    const tracks = data.items.map((track: SpotifyTypes.Track) => ({
        title: track.name,
        artist: track.artists.map((artist) => artist.name).join(", "),
        albumName: track.album.name,
        url: track.external_urls.spotify,
        coverImage: track.album.images[0],
    }));

    return tracks;
};

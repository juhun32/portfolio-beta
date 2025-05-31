export interface Image {
    url: string;
    height?: number;
    width?: number;
}

export interface Artist {
    name: string;
    external_urls: {
        spotify: string;
    };
}

export interface Album {
    name: string;
    images: Image[];
}

export interface Track {
    name: string;
    artists: Artist[];
    album: Album;
    external_urls: {
        spotify: string;
    };
}

export interface CurrentlyPlayingResponse {
    is_playing: boolean;
    item: Track | null;
}

export interface TopTracksResponse {
    items: Track[];
}

export interface CurrentlyPlayingTrack {
    isPlaying: boolean;
    title: string;
    artist: string;
    albumImageURL: string;
    songURL: string;
    nowPlaying: string;
}

export interface SpotifyTrack {
    title: string;
    artist: string;
    albumName?: string;
    url: string;
    coverImage?: Image;
}

export interface SpotifyData {
    isPlaying: boolean;
    title: string;
    artist: string;
    albumImageURL: string;
    songURL: string;
    nowPlaying: string;
    topTracks: SpotifyTrack[];
}

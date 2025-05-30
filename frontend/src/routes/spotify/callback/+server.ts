import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "$env/static/private";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
    const code = url.searchParams.get("code");

    if (!code) {
        return new Response("No authorization code provided", { status: 400 });
    }

    try {
        const tokenResponse = await fetch(
            "https://accounts.spotify.com/api/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    grant_type: "authorization_code",
                    code,
                    redirect_uri: "https://juhunpark.me/spotify/callback",
                    client_id: SPOTIFY_CLIENT_ID,
                    client_secret: SPOTIFY_CLIENT_SECRET,
                }),
            }
        );

        const data = await tokenResponse.json();

        if (data.refresh_token) {
            return new Response(
                `<html><body><h1>Your Spotify Refresh Token</h1>
                <p>Copy this value and add it to your .env file:</p>
                <pre style="background:#eee;padding:20px;font-size:16px;word-break:break-all">${data.refresh_token}</pre></body></html>`,
                { headers: { "Content-Type": "text/html" } }
            );
        } else {
            return new Response(
                "No refresh token received. Error: " + JSON.stringify(data),
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Error exchanging code for tokens:", error);
        return new Response(
            `Error: ${
                error instanceof Error ? error.message : "Unknown error"
            }`,
            { status: 500 }
        );
    }
};

const SpotifyPlayer = () => {
    return (
      <div className="spotify-player">
        <iframe
          src="https://open.spotify.com/embed/playlist/2OTMb0mPjkBDsXAEs7COjB?utm_source=generator"
          className="spotify-iframe"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ border: 0}}
        ></iframe>
      </div>
    );
}

export default SpotifyPlayer
"use client";

import { useEffect, useState } from "react";

type Props = {
  brandLine: string;
  videoSrc?: string;
  onDone: () => void;
};

export function IntroOverlay({ brandLine, videoSrc = "/intro.mp4", onDone }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => onDone(), 400);
      return () => clearTimeout(timer);
    }
  }, [visible, onDone]);

  return (
    <div className={`intro-overlay intro-cinema ${!visible ? "intro-hidden" : ""}`}>
      <div className="intro-cinema-screen">
        <div className="intro-vignette" />
        <video
          className="intro-video"
          src={videoSrc}
          autoPlay
          muted
          playsInline
          onEnded={() => setVisible(false)}
          onError={() => setVisible(false)}
        />
      </div>
      <p className="intro-name">{brandLine}</p>
      <div className="intro-overlay-content">
        <button type="button" className="intro-skip" onClick={() => setVisible(false)}>
          Salta intro
        </button>
      </div>
    </div>
  );
}

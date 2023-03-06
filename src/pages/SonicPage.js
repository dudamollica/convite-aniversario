import { useEffect, useRef } from "react";
import styled from "styled-components";
import Convite from "../assets/video.mp4";

export default function Sonic() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <InvitationContainer>
      <video loop playsInline ref={videoEl}>
        <source src={Convite} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </InvitationContainer>
  );
}

const InvitationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  video {
    width: 40%;
  }
  @media (max-width: 553px) {
    video {
      width: 100%;
    }
  }
`;

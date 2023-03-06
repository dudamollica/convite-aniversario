import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Envelope from "../assets/Click.mp4";

export default function Invitation() {
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
    <Link to={"/sonic"}>
      <InvitationContainer>
        <video loop muted playsInline ref={videoEl}>
          <source src={Envelope} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </InvitationContainer>
    </Link>
  );
}

const InvitationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 553px) {
    margin-top: 150px;
    video {
      width: 90%;
    }
  }
`;

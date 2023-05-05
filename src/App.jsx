import { useState } from "react";
import styled from "styled-components";
import FavoriteToggleButtonKeyframe from "./FavoriteToggleButtonKeyframe";
import { useCallback } from "react";
import FavoriteToggleButtonSpring from "./FavoriteToggleButtonSpring";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

const DemoContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 150px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function App() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoiteToggle = useCallback(() => {
    setIsFavorite((isFavorite) => !isFavorite);
  }, []);
  return (
    <Container>
      <Section>
        <h2 style={{margin: 0}}>Keyframe</h2>
        <DemoContainer>
          <FavoriteToggleButtonKeyframe
            isFavorite={isFavorite}
            onClick={handleFavoiteToggle}
          />
        </DemoContainer>
      </Section>
      <Section>
        <h2 style={{margin: 0}}>Spring</h2>
        <DemoContainer>
          <FavoriteToggleButtonSpring
            isFavorite={isFavorite}
            onClick={handleFavoiteToggle}
          />
        </DemoContainer>
      </Section>
    </Container>
  );
}

export default App;

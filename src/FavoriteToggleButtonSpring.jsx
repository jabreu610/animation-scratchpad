/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion } from "framer-motion";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { AnimatePresence } from "framer-motion";
import { useSpring } from "framer-motion";
import { useEffect } from "react";

const Container = styled(motion.button)`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  min-width: 36px;
  width: auto;
  height: 36px;
  font-size: 12px;
  padding: 12px;
`;

const FavoriteLabel = styled(motion.span)`
  display: block;
  overflow: hidden;
`;

const MotionRxBookmark = motion(RxBookmark);
const MotionRxBookmarkFilled = motion(RxBookmarkFilled);

function FavoriteToggleButtonSpring({ isFavorite, onClick }) {
  const width = useSpring(0, { bounce: 0.3 });
  useEffect(() => {
    if (isFavorite) {
      width.set(40);
      let timeoutToken = setTimeout(() => {
        width.set(0);
      }, 900);
      return () => {
        if (!isFavorite) {
          clearTimeout(timeoutToken);
          width.set(0);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  return (
    <Container style={{ borderRadius: 18 }} onClick={onClick}>
      {isFavorite && (
        <AnimatePresence>
          <FavoriteLabel style={{ width }}>Saved!</FavoriteLabel>
        </AnimatePresence>
      )}
      {isFavorite ? <MotionRxBookmarkFilled /> : <MotionRxBookmark />}
    </Container>
  );
}

export default FavoriteToggleButtonSpring;

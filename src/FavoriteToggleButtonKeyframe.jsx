/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion } from "framer-motion";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { AnimatePresence } from "framer-motion";

const Container = styled(motion.button)`
  display: flex;
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
  display: inline-block;
  overflow: hidden;
`;

const MotionRxBookmark = motion(RxBookmark);
const MotionRxBookmarkFilled = motion(RxBookmarkFilled);

function FavoriteToggleButtonKeyframe({ isFavorite, onClick }) {
  return (
    <Container style={{ borderRadius: 18 }} onClick={onClick}>
      {isFavorite && (
        <AnimatePresence>
          <FavoriteLabel
            transition={{ duration: 1.25, times: [0, 0.2, 0.8, 1] }}
            animate={{ width: [0, 40, 40, 0] }}
            exit={{ width: 0 }}
          >
            Saved!
          </FavoriteLabel>
        </AnimatePresence>
      )}
      {isFavorite ? <MotionRxBookmarkFilled /> : <MotionRxBookmark />}
    </Container>
  );
}

export default FavoriteToggleButtonKeyframe;

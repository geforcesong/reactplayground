import { useEffect, useRef } from "react";

function ClockCard({ newNumber }) {
  const flipCardRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    const flipCard = flipCardRef.current;
    const topHalf = topRef.current;
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = bottomRef.current;
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    topHalf.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
  }, [newNumber]);

  return (
    <div ref={flipCardRef} className="flip-card">
      <div ref={topRef} className="top">
        0
      </div>
      <div ref={bottomRef} className="bottom">
        0
      </div>
    </div>
  );
}

export default ClockCard;

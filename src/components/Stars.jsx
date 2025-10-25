import React, { useEffect } from "react";

function Stars() {
  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      starsContainer.appendChild(star);
    }
  }, []);

  return <div className="stars" id="stars"></div>;
}

export default Stars;

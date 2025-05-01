import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1742328651171.json"; // Import animation

export default function AnimatedComponent() {
  return (
    <div >
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}

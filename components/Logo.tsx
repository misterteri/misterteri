import { Link } from "@chakra-ui/react";
import NiceAvatar, { genConfig } from "react-nice-avatar";
// create object AvatarConfig
const AvatarConfig = genConfig({
  sex: "man",
  faceColor: "#F9C9B6",
  earSize: "big",
  eyeStyle: "smile",
  noseStyle: "long",
  mouthStyle: "peace",
  shirtStyle: "polo",
  glassesStyle: "round",
  hairColor: "#000",
  hairStyle: "thick",
  hatStyle: "none",
  eyeBrowStyle: "up",
  shirtColor: "#77311D",
  bgColor: "#9FADC6",
});

const Switch = () => {
  return (
    <Link href="/">
      <NiceAvatar
        shape={"rounded"}
        style={{ width: "3rem", height: "3rem" }}
        {...AvatarConfig}
      />
    </Link>
  );
};

export default Switch;
// Light and Dark mode switch
// UNDERSTOOD

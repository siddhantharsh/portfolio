import { TypingText } from "./TypingText";
import { TypingWordSwitcher } from "./TypingWordSwitcher";

const HeroText = ({ animate }) => {
  const words = ["Creative", "Innovative", "Passionate"];
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <TypingText
          text="Hi, I'm Siddhant"
          className="text-4xl font-medium"
          startDelay={0}
        />
        <div className="flex flex-col items-start">
          <TypingText
            text="Crafting Digital"
            className="text-5xl font-medium text-neutral-300"
            startDelay={1200}
          />
          <TypingText
            text="Experiences with"
            className="text-5xl font-medium text-neutral-300"
            startDelay={1200 + 40 * 16 + 200} // 16 chars * 40ms + 200ms buffer
          />
          <TypingWordSwitcher
            words={words}
            className="font-black text-white text-8xl"
            startDelay={2600}
          />
          <TypingText
            text="Solutions"
            className="text-4xl font-medium text-neutral-300"
            startDelay={5000}
          />
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <TypingText
          text="Hi, I'm Siddhant"
          className="text-4xl font-medium"
          startDelay={0}
        />
        <div>
          <TypingText
            text="Building"
            className="text-5xl font-black text-neutral-300"
            startDelay={1200}
          />
          <TypingWordSwitcher
            words={words}
            className="font-bold text-white text-7xl"
            startDelay={2600}
          />
          <TypingText
            text="Digital Solutions"
            className="text-4xl font-black text-neutral-300"
            startDelay={5000}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroText;

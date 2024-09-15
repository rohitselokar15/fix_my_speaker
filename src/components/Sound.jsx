import React, { useRef, useState } from "react";
import sound_1 from "../assets/sound_1.mp3";
import sound2 from "../assets/s2.wav";
import sound3 from "../assets/s3.wav";

const Sound = () => {
  const [currentSound, setCurrentSound] = useState(sound_1);
  const [soundIndex, setSoundIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleChangeSound = () => {
    let newSound;
    let newIndex;

    if (currentSound === sound_1) {
      newSound = sound2;
      newIndex = 2;
    } else if (currentSound === sound2) {
      newSound = sound3;
      newIndex = 3;
    } else {
      newSound = sound_1;
      newIndex = 1;
    }

    setCurrentSound(newSound);
    setSoundIndex(newIndex);
    setIsPlaying(false);
  };

  const handleDuration = (minutes) => {
    const seconds = minutes * 60;
    setDuration(seconds);
    audioRef.current.currentTime = 0;
    setIsPlaying(true);
    setActiveButton(minutes); // Set activeButton state here

    audioRef.current.onloadedmetadata = () => {
      const endTime = Date.now() + seconds * 1000; // Calculate the end time

      const timer = setInterval(() => {
        const remainingTime = endTime - Date.now(); // Calculate remaining time
        if (remainingTime <= 0) {
          setIsPlaying(false);
          setActiveButton(null); // Reset activeButton state when duration is complete
          clearInterval(timer); // Clear the interval when the duration is complete
        }
      }, 1000); // Check elapsed time every second
    };
  };

  return (
    <div className="bg-[#242526] p-2 xl:py-6">
      <div className=" text-white text-center">
        <h1 className="font-semibold text-[30px] xl:text-[35px]">
          Speaker cleaner
        </h1>
        <p>
          Eject water from phone’s speakers swiftly to keep sound crystal clear
        </p>
      </div>

      <div className="py-1 lg:flex justify-center items-center gap-8 xl:gap-10 xl:mt-10">
        <div className=" p-8 text-center">
          <button className="bg-white p-4 rounded-full px-9 text-[25px] lg:text-[20px] xl:text-[35px] xl:px-7 xl:p-2">
            💨 💦
          </button>

          <div className="my-4 p-4">
            <i
              className="fa-solid fa-circle-play text-[45px] l mx-6 cursor-pointer text-white hover:scale-105 duration-300"
              onClick={handlePlay}
            />
            <i
              className="fa-regular fa-circle-pause  text-[45px]  mx-6  cursor-pointer text-white hover:scale-105 duration-300"
              onClick={handlePause}
            />
          </div>
          <button
            className="bg-orange-500 p-2.5 rounded-2xl px-6 my-2 xl:p-4 xl:px-6 xl:text-[16px] font-semibold text-white hover:scale-105 duration-300"
            onClick={handleChangeSound}
          >
            Change Sound
          </button>
          <p className="text-white">(Using Sound {soundIndex})</p>
        </div>

        <div className="text-center md:flex items-center justify-center gap-4 lg:flex-col xl:p-4">
          <button
            className={`bg-orange-500 mx-2 p-2 md:p-3 rounded-md md:px-3 xl:px-6 text-white hover:scale-105 duration-300 font-semibold ${
              activeButton === 4 && "border-2 border-white shadow-2xl"
            }`}
            onClick={() => handleDuration(4)}
          >
            4 Minutes
          </button>
          <button
            className={`bg-orange-500 md::mx-2 p-2 md:p-3 rounded-md xl:px-6 xl:my-4 text-white hover:scale-105 duration-300 font-semibold ${
              activeButton === 8 && "border-2 border-white shadow-2xl"
            }`}
            onClick={() => handleDuration(8)}
          >
            8 Minutes
          </button>
          <button
            className={` bg-orange-500 my-2 lg:my-0 p-2 md:p-3 mx-2 rounded-md md:px-3 xl:px-6 text-white hover:scale-105 duration-300 font-semibold ${
              activeButton === 12 && "border-2 border-white shadow-2xl"
            }`}
            onClick={() => handleDuration(12)}
          >
            12 Minutes{" "}
          </button>

          {/* <div className="text-center">
            <button
              className={`bg-orange-500 p-2 mx-2 rounded-md md:px-3 xl:p-4 xl:px-6 text-white hover:scale-105 duration-300 font-semibold ${
                activeButton === 12 && "border-2 border-white shadow-2xl"
              }`}
              onClick={() => handleDuration(12)}
            >
              12 Minutes{" "}
            </button>
          </div> */}
        </div>
      </div>

      <audio ref={audioRef} src={currentSound} />
    </div>
  );
};

export default Sound;

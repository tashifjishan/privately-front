import { PiChats } from "react-icons/pi";
import { CiVideoOff } from "react-icons/ci";
import { BsEmojiWink, BsMicMute } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { RiArrowGoBackLine, RiVoiceprintLine } from "react-icons/ri";
import { Link } from "react-router";
import { IoSend } from "react-icons/io5";
import { useState } from "react";

export default function Watch() {
    const [sendBtnVisible, setSendBtnVisible] = useState(false);
  return (
    <div className=" flex flex-col bg-[#f9fafb] text-gray-800 h-screen">
      {/* Header */}
      <div className="px-6 py-2 flex items-center justify-between gap-3 border-b border-gray-200 bg-white">
        <Link to={"../"}>
          <RiArrowGoBackLine size={24} className="text-gray-600" />
        </Link>
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAOGvsuCigTR-oRCUKfLFQJDcmAOxJfNXgQ&s"
            alt="User"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1  grid lg:grid-cols-[3fr_1fr] grid-cols-1 gap-6 p-2 lg:p-6 ">
        {/* Left: Video + Participants */}
        <div className="flex flex-col gap-2 overflow-hidden justify-between">
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            className="w-full h-64 sm:h-80 md:h-3/4 rounded-md bg-black"
            controls
            autoPlay
            muted
          ></video>

          {/* Participants */}
          <div className="flex  justify-center gap-6  overflow-auto ">
            {[
              {
                img: "https://media.tenor.com/fk5PaQdZatMAAAAM/on-the-phone-phone.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },

              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
                {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              }
              ,
                {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              }
              ,
                {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },

              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },,
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },

              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },,
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },

              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },,
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },

              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },,
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },

              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
              {
                img: "https://media.tenor.com/e2H9ESW2-MwAAAAM/watching-popcorn.gif",
              },
            ].map((person, index) => (
              <div key={index} className="text-center space-y-2 ">
                <img
                  className="h-24 w-36 lg:h-24 lg:w-24  rounded-md object-cover"
                  src={person.img}
                  alt="Participant"
                />
                <div className="flex justify-center gap-3 text-gray-600">
                  <button className="hover:text-red-500 transition">
                    <CiVideoOff size={28} />
                  </button>
                  <button className="hover:text-yellow-500 transition">
                    <BsMicMute size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chat */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="bg-gray-100 text-sm p-2 rounded-md w-fit max-w-[80%]">
              🎬 Welcome to the Watch Party!
            </div>
            <div className="bg-blue-100 text-sm p-2 rounded-md w-fit max-w-[80%] self-end ml-auto">
              Hey! Ready to watch?
            </div>
            <div className="bg-gray-100 text-sm p-2 rounded-md w-fit max-w-[80%]">
              Yup! Got snacks and everything 🍿
            </div>
            <div className="bg-blue-100 text-sm p-2 rounded-md w-fit max-w-[80%] self-end ml-auto">
              Awesome, let’s start!
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 px-4 py-2 grid grid-cols-[20px_20px_auto_20px] items-center gap-2">
            <BsEmojiWink size={22} className="text-gray-500 cursor-pointer" />
            <IoIosAttach size={22} className="text-gray-500 cursor-pointer" />
          <div className=" grid grid-cols-[1fr_10px] items-center border border-gray-200 rounded-full px-4 ">
              <input
                className=" rounded-full  py-2  focus:outline-none focus:outline-none text-sm"
                type="text"
                placeholder="Say something..."
                onChange={(e) => {
                  if (e.target.value.trim().length > 0) {
                    setSendBtnVisible(true);
                  } else {
                    setSendBtnVisible(false);
                  }
                }}
              />

              {sendBtnVisible && <IoSend size={20} />}
            </div>
            <RiVoiceprintLine
              size={22}
              className="text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

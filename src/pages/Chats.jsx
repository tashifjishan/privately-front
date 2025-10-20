import { CiMenuKebab, CiPhone, CiVideoOn, CiVoicemail } from "react-icons/ci";
import { BsEmojiWink } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import {
  RiHome3Fill,
  RiMessage3Fill,
  RiVideoAddLine,
  RiVoiceprintLine,
} from "react-icons/ri";
import { FaMask, FaRegPlayCircle } from "react-icons/fa";
import { HiEnvelope, HiHome, HiMagnifyingGlass } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";

import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router";
import { IoSend } from "react-icons/io5";
import Nav from "../components/Nav";
export default function Chats() {
  const [friendsSectionOpen, setFriendsSectionOpen] = useState(false);
  const [sendBtnVisible, setSendBtnVisible] = useState(false);
  const friends = [
    {
      name: "MONIKA",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2aBxLFaQwzttmmF7YiBkJWzGq_nXqVjWdg&s",
      msgTime: "3:55",
      lastMessage: "Hey, are you coming today?",
    },
    {
      name: "DARIKUS",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      msgTime: "4:10",
      lastMessage: "On my way!",
    },
    {
      name: "AISHA",
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
      msgTime: "2:47",
      lastMessage: "See you soon.",
    },
    {
      name: "LEO",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
      msgTime: "5:33",
      lastMessage: "Let’s catch up tomorrow.",
    },
    {
      name: "SOPHIE",
      profilePic: "https://randomuser.me/api/portraits/women/34.jpg",
      msgTime: "1:22",
      lastMessage: "I loved that idea!",
    },
    {
      name: "JIN",
      profilePic: "https://randomuser.me/api/portraits/men/76.jpg",
      msgTime: "6:05",
      lastMessage: "Call me when free.",
    },
    {
      name: "MARIA",
      profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
      msgTime: "0:45",
      lastMessage: "Thanks for today!",
    },
    {
      name: "NATHAN",
      profilePic: "https://randomuser.me/api/portraits/men/54.jpg",
      msgTime: "11:20",
      lastMessage: "Can you send that file?",
    },
    {
      name: "ELENA",
      profilePic: "https://randomuser.me/api/portraits/women/80.jpg",
      msgTime: "7:30",
      lastMessage: "What do you think?",
    },
    {
      name: "OSCAR",
      profilePic: "https://randomuser.me/api/portraits/men/90.jpg",
      msgTime: "8:15",
      lastMessage: "Let’s meet at 9.",
    },
    {
      name: "VICTORIA",
      profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
      msgTime: "12:05",
      lastMessage: "I’m sending the link now.",
    },
    {
      name: "BRUNO",
      profilePic: "https://randomuser.me/api/portraits/men/37.jpg",
      msgTime: "3:03",
      lastMessage: "Haha, that’s funny.",
    },
    {
      name: "LUNA",
      profilePic: "https://randomuser.me/api/portraits/women/47.jpg",
      msgTime: "9:44",
      lastMessage: "Good night!",
    },
    {
      name: "ELI",
      profilePic: "https://randomuser.me/api/portraits/men/28.jpg",
      msgTime: "10:55",
      lastMessage: "Got it, thanks.",
    },
    {
      name: "NORA",
      profilePic: "https://randomuser.me/api/portraits/women/56.jpg",
      msgTime: "2:12",
      lastMessage: "I’ll join in a bit.",
    },
    {
      name: "CALEB",
      profilePic: "https://randomuser.me/api/portraits/men/68.jpg",
      msgTime: "4:59",
      lastMessage: "Where are you?",
    },
    {
      name: "ZARA",
      profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
      msgTime: "5:05",
      lastMessage: "Sure, sounds good.",
    },
    {
      name: "HUGO",
      profilePic: "https://randomuser.me/api/portraits/men/44.jpg",
      msgTime: "1:50",
      lastMessage: "I’ll call you later.",
    },
    {
      name: "MAYA",
      profilePic: "https://randomuser.me/api/portraits/women/72.jpg",
      msgTime: "6:46",
      lastMessage: "Can’t wait!",
    },
    {
      name: "ADAM",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
      msgTime: "7:22",
      lastMessage: "On it.",
    },
    {
      name: "KARLA",
      profilePic: "https://randomuser.me/api/portraits/women/51.jpg",
      msgTime: "8:28",
      lastMessage: "Let me check.",
    },
    {
      name: "ROGER",
      profilePic: "https://randomuser.me/api/portraits/men/74.jpg",
      msgTime: "0:33",
      lastMessage: "See you then.",
    },
    {
      name: "FELIX",
      profilePic: "https://randomuser.me/api/portraits/men/29.jpg",
      msgTime: "3:11",
      lastMessage: "I like that.",
    },
    {
      name: "CLARA",
      profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
      msgTime: "4:45",
      lastMessage: "Thanks a lot!",
    },
    {
      name: "RAJ",
      profilePic: "https://randomuser.me/api/portraits/men/61.jpg",
      msgTime: "9:09",
      lastMessage: "Will do.",
    },
    {
      name: "LISA",
      profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
      msgTime: "11:37",
      lastMessage: "That’s amazing!",
    },
    {
      name: "JORDAN",
      profilePic: "https://randomuser.me/api/portraits/men/99.jpg",
      msgTime: "12:59",
      lastMessage: "Count me in.",
    },
    {
      name: "SARA",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
      msgTime: "2:24",
      lastMessage: "I’ll message you.",
    },
    {
      name: "TYLER",
      profilePic: "https://randomuser.me/api/portraits/men/46.jpg",
      msgTime: "3:38",
      lastMessage: "Do you have that?",
    },
    {
      name: "GRACE",
      profilePic: "https://randomuser.me/api/portraits/women/31.jpg",
      msgTime: "5:57",
      lastMessage: "Thanks for the invite!",
    },
    {
      name: "OWEN",
      profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
      msgTime: "6:23",
      lastMessage: "I’ll be late.",
    },
    {
      name: "ELISA",
      profilePic: "https://randomuser.me/api/portraits/women/43.jpg",
      msgTime: "7:49",
      lastMessage: "Let’s talk soon.",
    },
    {
      name: "DEREK",
      profilePic: "https://randomuser.me/api/portraits/men/58.jpg",
      msgTime: "8:02",
      lastMessage: "Good idea!",
    },
    {
      name: "FIONA",
      profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
      msgTime: "0:14",
      lastMessage: "I’ll be there.",
    },
    {
      name: "ERIC",
      profilePic: "https://randomuser.me/api/portraits/men/84.jpg",
      msgTime: "1:55",
      lastMessage: "Check this out.",
    },
    {
      name: "MILA",
      profilePic: "https://randomuser.me/api/portraits/women/42.jpg",
      msgTime: "2:33",
      lastMessage: "That’s great.",
    },
    {
      name: "NICK",
      profilePic: "https://randomuser.me/api/portraits/men/89.jpg",
      msgTime: "4:14",
      lastMessage: "Where should we meet?",
    },
    {
      name: "OLIVIA",
      profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
      msgTime: "5:08",
      lastMessage: "I’m almost there.",
    },
    {
      name: "PETER",
      profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
      msgTime: "6:37",
      lastMessage: "Let me know.",
    },
    {
      name: "QUINN",
      profilePic: "https://randomuser.me/api/portraits/women/58.jpg",
      msgTime: "7:16",
      lastMessage: "Cool!",
    },
    {
      name: "RYAN",
      profilePic: "https://randomuser.me/api/portraits/men/39.jpg",
      msgTime: "8:42",
      lastMessage: "I’ll check and tell you.",
    },
    {
      name: "STELLA",
      profilePic: "https://randomuser.me/api/portraits/women/70.jpg",
      msgTime: "9:33",
      lastMessage: "Miss you!",
    },
    {
      name: "TONY",
      profilePic: "https://randomuser.me/api/portraits/men/73.jpg",
      msgTime: "10:49",
      lastMessage: "All good here.",
    },
    {
      name: "URSULA",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
      msgTime: "11:58",
      lastMessage: "Thanks for understanding.",
    },
    {
      name: "VINCE",
      profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
      msgTime: "0:05",
      lastMessage: "Ready when you are.",
    },
    {
      name: "WILLA",
      profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
      msgTime: "1:27",
      lastMessage: "Let’s do this.",
    },
  ];

  return (
    <div className="grid grid-cols-[50px_1fr] lg:grid-cols-[auto_400px_1fr] h-screen overflow-hidden">
      <Nav />
      <div
        className={`duration-500 bg-slate-900 fixed lg:static ${
          friendsSectionOpen ? "left-[50px]" : "-left-[450px]"
        } lg:flex flex-col gap-6 h-screen overflow-auto scrollbar-hide `}
      >
        <div className="flex flex-col gap-6 sticky top-0 bg-inherit z-50 p-4 pb-0">
          <div className="flex items-center  flex justify-between ">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAOGvsuCigTR-oRCUKfLFQJDcmAOxJfNXgQ&s"
              alt=""
            />
            <CiMenuKebab size={24} className="cursor-pointer" />
          </div>

          <div className="flex items-center rounded-2xl p-2 bg-white flex gap-4 pl-6 border-2 border-gray-200">
            <HiMagnifyingGlass className="text-gray-500" size={24} />
            <input
              type="text"
              placeholder="Search by user id"
              className="flex-1 focus:outline-none"
            />
          </div>
        </div>

        {/* Friends */}
        <div className="flex flex-col gap-6 flex-wrap p-6">
          {friends.map((friend) => (
            <div className="flex  gap-2 items-center cursor-pointer items-center relative ">
              <div className=" overflow-hidden">
                <img
                  src={friend.profilePic}
                  className=" h-12 w-12 rounded-xl  object-cover hover:scale-150 duration-500 hover:sepia-150"
                  alt=""
                />
              </div>
              <div>
                <p className="text-white">{friend.name}</p>
                <p className="text-gray-500">{friend.lastMessage}</p>
              </div>

              <span className="text-gray-500 absolute top-0 right-0">
                {friend.msgTime}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inbox */}

      <div
        className="flex flex-col h-screen"
        onClick={() => setFriendsSectionOpen(false)}
      >
        <div className="p-4  flex gap-2 items-center border-b-[1px]">
          <FaBarsStaggered
            className="lg:hidden cursor-pointer hover:text-primaryBg"
            onClick={(e) => {
              e.stopPropagation();
              setFriendsSectionOpen(true);
            }}
            size={24}
          />
          <img
            className="w-12 rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt=""
          />
          <div>
            <p className="text-xl">Jonathan</p>
            <p className="inline-flex items-center gap-[5px]">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
              <span> Online</span>
            </p>
          </div>

          <div className="ml-auto flex gap-2 items-center ">
            <CiVideoOn size={30} />
            <CiPhone size={30} />
          </div>
        </div>

        {/* Message Section */}
        <div className="flex-1  flex flex-col">
          <div className="flex-1 p-6 flex flex-col gap-2 px-12  justify-end">
            <p className="rounded-xl px-4 py-2 bg-[#eae6f6] w-fit max-w-96">
              Hi!
            </p>
            <p className="rounded-xl px-4 py-2 bg-gray-100 w-fit ml-auto max-w-96">
              Hello!
            </p>
            <p className="rounded-xl px-4 py-2 bg-gray-100 w-fit ml-auto max-w-96 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolorem repellat rem laborum obcaecati a dolore iure aut deserunt
              cum molestiae suscipit dicta fugit quis officia, velit numquam?
              Possimus, animi?
            </p>
          </div>
          <div className="p-6 flex gap-2 items-center ">
            <BsEmojiWink size={24} />
            <IoIosAttach size={24} />
            <div className="flex-1 grid grid-cols-[1fr_20px] items-center border border-gray-200 rounded-full px-4 ">
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
            <RiVoiceprintLine size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

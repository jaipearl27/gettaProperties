"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

const Page = () => {
  const users = [
    {
      name: "Darlene Robertson",
      role: "Project Manager",
      time: "35 mins",
      image: "https://justhomnextjs.vercel.app/images/author/author-1.png",
      status: "active",
    },
    {
      name: "Jane Cooper",
      role: "UI/UX Designer",
      time: "35 mins",
      image: "https://justhomnextjs.vercel.app/images/author/author-2.png",
      status: "inactive",
    },
    {
      name: "Arlene McCoy",
      role: "Backend Developer",
      time: "35 mins",
      image: "https://justhomnextjs.vercel.app/images/author/author-3.png",
      status: "active",
    },
    {
      name: "Albert Flores",
      role: "Frontend Developer",
      time: "35 mins",
      image: "https://justhomnextjs.vercel.app/images/author/author-4.png",
      status: "inactive",
    },
    {
      name: "Cameron Williamson",
      role: "DevOps Engineer",
      time: "35 mins",
      image: "https://justhomnextjs.vercel.app/images/author/author-5.png",
      status: "active",
    },
  ];

  const chatMessages = [
    {
      id: 1,
      chatId: 1,
      sender: "Alice",
      content: "Hello, Bob!",
      sentAt: "2024-10-14T08:00:00Z",
    },
    {
      id: 2,
      chatId: 1,
      sender: "Bob",
      content: "Hi, Alice! How are you?",
      sentAt: "2024-10-14T09:30:00Z",
    },
    {
      id: 3,
      chatId: 1,
      sender: "Alice",
      content: "I am good, thanks! What about you?",
      sentAt: "2024-10-14T10:00:00Z",
    },
    {
      id: 4,
      chatId: 1,
      sender: "Bob",
      content:
        "I'm doing well, just busy with work. Have you finished the project we discussed?",
      sentAt: "2024-10-14T11:15:00Z",
    },
    {
      id: 5,
      chatId: 1,
      sender: "Alice",
      content:
        "Almost! I just need to finalize the report and then I'll send it over.",
      sentAt: "2024-10-14T13:00:00Z",
    },
    {
      id: 6,
      chatId: 1,
      sender: "Bob",
      content: "Sounds great! Let me know if you need any help with it.",
      sentAt: "2024-10-14T15:45:00Z",
    },
    {
      id: 7,
      chatId: 1,
      sender: "Alice",
      content:
        "Thanks, I might take you up on that! By the way, are you free this weekend?",
      sentAt: "2024-10-14T16:30:00Z",
    },
    {
      id: 8,
      chatId: 1,
      sender: "Bob",
      content: "I should be! What do you have in mind?",
      sentAt: "2024-10-14T18:00:00Z",
    },
    {
      id: 9,
      chatId: 1,
      sender: "Alice",
      content: "How about we grab lunch and catch up?",
      sentAt: "2024-10-14T20:00:00Z",
    },
    {
      id: 10,
      chatId: 1,
      sender: "Bob",
      content: "That sounds perfect! Let's set a time.",
      sentAt: "2024-10-14T21:30:00Z",
    },
  ];

  const [currentChat, setCurrentChat] = useState(users[0]);

  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">Messages</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>

      <div className="flex gap-2 mt-10 h-[80dvh] overflow-y-auto no-scrollbar flex-col lg:flex-row">
        <div className="w-full lg:w-80 p-6 rounded-xl border bg-white">
          <div className="mb-8 relative w-full h-[50px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-16 px-7 h-full rounded-full text-black focus:outline-none border"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full h-[40px] w-[40px] flex justify-center items-center">
              <CiSearch className="text-xl" />
            </button>
          </div>

          <div className="w-full space-y-8">
            {users.map((user, index) => (
              <User
                key={index}
                {...user}
                handleClick={() => setCurrentChat(user)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 p-6 rounded-xl bg-white border flex flex-col justify-between">
          <ChatHeader {...currentChat} />
          <ChatBody messages={chatMessages} />
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default Page;

const User = (props) => {
  const { image, name, role, time, handleClick } = props;
  return (
    <div
      className="flex items-center gap-3 cursor-pointer hover:bg-neutral-100 rounded-lg"
      onClick={handleClick}
    >
      <img className="w-11 h-11 rounded-full" src={image} alt="img" />

      <div className="flex h-full w-full items-center justify-between">
        <div className="leading-none">
          <div className="font-semibold">{name}</div>
          <div className="text-neutral-600 text-sm">{role}</div>
        </div>
        <div className="text-neutral-600 text-sm">{time}</div>
      </div>
    </div>
  );
};

const ChatHeader = (props) => {
  const { image, name, status } = props;
  return (
    <div className="flex justify-between items-center border-b pb-5">
      <div className="flex items-center gap-3">
        <img className="w-11 h-11 rounded-full" src={image} alt="img" />

        <div className="h-full w-full items-center">
          <div className="font-semibold leading-none ">{name}</div>
          <div className="text-neutral-600 text-sm">{status}</div>
        </div>
      </div>
      <div className="text-nowrap leading-none cursor-pointer text-[#e8543e] underline-offset-1">
        Delete Conversation
      </div>
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Type a message"
        className="w-full p-4 rounded-xl placeholder:text-black focus:outline-none"
      />
      <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
        <div className="text-nowrap">Send Message</div>
        <GoArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const ChatBody = (props) => {
  const { messages } = props;
  return (
    <div className="h-full w-full overflow-y-auto no-scrollbar pt-8 px-3">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

const Message = (props) => {
  function timeAgo(sentAt) {
    const now = new Date();
    const sentTime = new Date(sentAt);
    const diffInSeconds = Math.floor((now - sentTime) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    for (const key in intervals) {
      const interval = Math.floor(diffInSeconds / intervals[key]);
      if (interval >= 1) {
        return `${interval} ${key}${interval > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  }

  const { chatId, sender, content, sentAt } = props;
  return (
    <div
      className={`w-full flex flex-col gap-4 mb-5 ${
        sender === "Bob" ? " items-end" : ""
      }`}
    >
      <div
        className={`flex gap-3 w-full items-center ${
          sender === "Bob" ? "flex-row-reverse" : ""
        } `}
      >
        <img
          className="w-11 h-11 rounded-full"
          src={`${
            sender === "Bob"
              ? "https://justhomnextjs.vercel.app/images/author/author-5.png"
              : "https://justhomnextjs.vercel.app/images/author/author-1.png"
          }`}
          alt="img"
        />
        <div
          className={`flex gap-3 items-center ${
            sender === "Bob" ? "flex-row-reverse" : ""
          } `}
        >
          <p>{sender === "Bob" ? "You" : sender}</p>
          <p className="text-neutral-600 text-sm">{timeAgo(sentAt)}</p>
        </div>
      </div>

      <div className="w-96 p-5 rounded-xl bg-neutral-100">
        <p className={` ${sender === "Bob" ? "text-end" : ""}`}>{content}</p>
      </div>
    </div>
  );
};

import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="Vishwesh Patel"
        src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600"
        status="online"
      />
      <Contacts
        name="Parth Patel"
        src="https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=600"
        status="offline"
      />
      <Contacts
        name="Neem Patel"
        src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600"
        status="online"
      />
    </div>
  );
};

export default RightSidebar;
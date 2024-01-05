"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
} from "@nextui-org/react";
import {
  Activity,
  BellDot,
  MailIcon,
  MessageCircleMore,
  Search,
  Upload,
  UserIcon,
} from "lucide-react";
import { Badge, Avatar } from "@nextui-org/react";

function Topbar() {
  const sidebar = [
    {
      name: "Dashboard",
    },
    {
      name: "My Course",
    },
    {
      name: "Calendar",
    },
    {
      name: "Resource",
    },
    {
      name: "Quiz",
    },
    {
      name: "Message",
      icon: <MessageCircleMore />,
    },
    {
      name: "My Status",
    },
    {
      name: "Wallet",
    },
    {
      name: "My Account",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Hello Mad</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="start">
        <NavbarItem>
          <Input
            placeholder="Search here"
            labelPlacement="outside"
            startContent={
              <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="md:flex hidden gap-8" justify="end">
        <NavbarItem className="hidden lg:flex">
          <div
            className="flex flex-row bg-yellow-600 px-2 py-2 text-white"
            color="primary"
          >
            <Upload className="mr-2" />
            New Upload
          </div>
        </NavbarItem>
        <NavbarItem>
          <Badge content="5" size="sm" color="primary">
            <BellDot />
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <MessageCircleMore />
        </NavbarItem>
        <NavbarItem>
          <Activity />
        </NavbarItem>
        <NavbarItem>
          <div className="flex">
            <div className="mr-2 flex flex-col justify-center items-center">
              <h1 className="font-semibold">TheMad</h1>
              <span className="text-gray-600 text-sm">Designer</span>
            </div>
            <div>
              <Avatar
                radius="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {sidebar.map((item: any, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"foreground"} className="w-full" href="#" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Topbar;

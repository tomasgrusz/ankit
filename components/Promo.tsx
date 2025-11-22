"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { GithubIcon, Heart } from "lucide-react";

const GithubMessage = () => {
  useEffect(() => {
    if (sessionStorage.getItem("privacy-toast-dismissed") !== "true") {
      setTimeout(() => {
        toast("Supporting your privacy!", {
          description:
            "This project is open-source and does not collect any data or user analytics.",
          cancel: {
            label: "OK",
            onClick: () => {
              sessionStorage.setItem("privacy-toast-dismissed", "true");
            },
          },
          duration: 10000,
          icon: <Heart size={16} />,
        });
      }, 5000);
    }

    setTimeout(() => {
      toast("Enjoying Ankit?", {
        description: "Show your support and star Ankit on GitHub ⭐️.",
        cancel: {
          label: "Visit GitHub",
          onClick: () =>
            window.open(
              "https://github.com/tomasgrusz/ankit",
              "_blank",
              "noopener,noreferrer"
            ),
        },
        action: {
          label: "Cancel",
          onClick: () => {},
        },
        actionButtonStyle: {
          backgroundColor: "transparent",
          border: "1px solid #ddd",
          color: "#ddd",
        },
        duration: 300000,
        icon: <GithubIcon size={16} />,
      });
    }, 30000);
  }, []);

  return (
    <>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/tomasgrusz/ankit"
              target="_blank"
              rel="noreferrer noopener"
              className="fixed top-4 right-4"
              aria-label="Visit Ankit on GitHub"
            >
              <GithubIcon size={20} />
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Visit Ankit on GitHub</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Toaster></Toaster>
    </>
  );
};

export default GithubMessage;

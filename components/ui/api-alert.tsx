"use client";

import { FaServer } from "react-icons/fa";
import { CopyIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("API Route copied to the clipboard.");
  };

  return (
    <Alert>
      <FaServer className="w-4 h-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="realitve rounded bg-mouted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button
          variant="outline"
          size="icon"
          onClick={onCopy}
        >
          <CopyIcon className="h-4 w-4 " />
        </Button>
      </AlertDescription>
    </Alert>
  );
};

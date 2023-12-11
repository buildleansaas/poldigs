"use client";

import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

export default function Subscribe() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button size="sm" className="bg-blue-500 text-white">
          Go Pro
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Your PolDig License Key</AlertDialogTitle>
          <AlertDialogDescription>
            Please visit <Link href="">this link</Link> to obtain your pro
            license. Once you've subcribed, please enter your license key below
            and hit save to activate your subscription. Thank you!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

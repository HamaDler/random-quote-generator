import React from "react";
import { Button } from "@smooth-ui/core-sc";
export default function SmoothButton(props) {
  return <Button width={200}>{props.content}</Button>;
}

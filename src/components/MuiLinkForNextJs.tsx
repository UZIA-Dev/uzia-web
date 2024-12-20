import React from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";

type Props = {
  href: string;
  children: React.ReactNode;
}

export const MuiLinkForNextJs = (props: Props) => {
  const { href, children } = props;
  return (
    <Link component={NextLink} href={href} underline="none">
      {children}
    </Link>
  );
}

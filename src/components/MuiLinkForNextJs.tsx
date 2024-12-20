import React from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";

type Props = {
  href: string;
  children: React.ReactNode;
  underline?: 'none' | 'hover' | 'always';
}

export const MuiLinkForNextJs = (props: Props) => {
  const { href, children, underline } = props;
  return (
    <Link component={NextLink} href={href} underline={underline}>
      {children}
    </Link>
  );
}

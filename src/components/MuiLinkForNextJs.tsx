import React from "react";
import NextLink from "next/link";
import { Link, LinkProps } from "@mui/material";

interface Props extends LinkProps {
  href: string;
  children: React.ReactNode;
  underline?: 'none' | 'hover' | 'always';
}

export const MuiLinkForNextJs = (props: Props) => {
  const { href, children, underline } = props;
  return (
    <Link  {...props} component={NextLink} href={href} underline={underline}>
      {children}
    </Link>
  );
}

import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGetWindowSize } from "../../../hooks/useGetWindowSize";
import _get from "lodash/get";

type LogoIconProps = {
  href?: string;
  className?: string;
}

const LogoIcon = (props: LogoIconProps) => {
  const { href = "/", className } = props;
  const windowSize = useGetWindowSize();
  return (
    <Box sx={{ display: { xs: 'flex' }, mr: 1, flexDirection: "row", alignItems: "center" }}>
      <Link className={`logo-icon-container ${className}`} href={href} underline="none" />
      {_get(windowSize, 'width') < 900 ? null : (
        <Typography noWrap variant="subtitle2" sx={{ fontWeight: 100 }}>OFFICIAL WEBSITE</Typography>
      )}
    </Box>
  );
}

export default LogoIcon;

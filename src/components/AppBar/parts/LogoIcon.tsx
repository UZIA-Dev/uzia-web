import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import basePath from '../../../utils/getBasePath'

type LogoIconProps = {
  href?: string;
  className?: string;
}

const LogoIcon = (props: LogoIconProps) => {
  const { href = "/", className } = props;
  return (
    <Box sx={{ display: { xs: 'flex' }, mr: 1 }}>
      <Link className={`logo-icon-conteiner ${className}`} href={href} underline="none"></Link>
    </Box>
  );
}

export default LogoIcon;
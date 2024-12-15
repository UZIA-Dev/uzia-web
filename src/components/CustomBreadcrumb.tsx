import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const getBreadcrumbs = () => {
  return (
    <React.Fragment>
      <Link href="/" underline="none" color="white">
        Home
      </Link>
      <Link href="" underline="none" color="white">
        News
      </Link>
      <Link href="" underline="none" color="white">
        UZIA Official Site Launch
      </Link>
    </React.Fragment>
  );
}

const CustomBreadcrumb = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" color="inherit" />}
      aria-label="breadcrumb"
      className="breadcrumb"
    >
      {getBreadcrumbs()}
    </Breadcrumbs>
  );
}

export default CustomBreadcrumb;

"use client"
import React from 'react';
import { usePathname } from "next/navigation";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import { getRoutePath2PathName } from "@/utils/getRoutePath2PathName";

type SubPagesLayoutProps = {
  children: React.ReactNode;
}

const SubPagesLayout = (props: Readonly<SubPagesLayoutProps>) => {
  const { children } = props;
  const pathName = usePathname();
  const { label } = getRoutePath2PathName(pathName);
  return (
    <React.Fragment>
      <Paper className="subpage-header-container" sx={{ width: '100%' }}>
        <div className="subpage-title-container">
          <Typography variant='h1' className="subpage-title-title-text">{label}</Typography>
          <CustomBreadcrumb />
        </div>
      </Paper>
      <Container>
        {children}
      </Container>
    </React.Fragment>
  );
}

export default SubPagesLayout;

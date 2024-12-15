import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';

type SubPagesLayoutProps = {
  children: React.ReactNode;
}

const SubPagesLayout = (props: Readonly<SubPagesLayoutProps>) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Paper className="subpage-header-container" sx={{ width: '100%' }}>
        <div className="subpage-title-container">
          <Typography variant='h1' className="subpage-title-title-text">ページ名</Typography>
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

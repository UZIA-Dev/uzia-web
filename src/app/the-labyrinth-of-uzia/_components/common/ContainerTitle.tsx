import React from "react";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

type ContainerTitleProps = {
  titleText: string;
}

const ContainerTitle = (props: ContainerTitleProps) => {
  const { titleText } = props;

  return (
    <Divider component="div" role="presentation" textAlign="left" aria-hidden="true">
      <Typography variant='h2' className="container-title">{titleText}</Typography>
    </Divider>
  );
}

export default ContainerTitle;

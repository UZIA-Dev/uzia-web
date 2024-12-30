import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ContainerTitle from './common/ContainerTitle';
import StaffInfo from '../../../../public/data/staff-info.json';

type StaffItemType = {
  name: string;
  role: string;
  subname?: string;
}

type StaffItemProps = {
  item: StaffItemType;
}

const Item = (props: StaffItemProps) => {
  const { item } = props;
  const style = {
    whiteSpace: "break-spaces"
  };
  return (
    <Box className="uzui-staff-item-container">
      <Typography variant="caption" style={style}>{item.role}</Typography>
      <Divider sx={{ borderWidth: 1.5 }} />
      <Typography variant="body1" style={style}>{item.name}</Typography>
    </Box>
  );
}

const UziaStaff = () => {
  return (
    <Box className="uzui-content-container">
      <ContainerTitle titleText="Staff" />
      <Typography variant="body2" mb={2}>「ユーザイアの迷宮」開発スタッフ</Typography>
      <Grid container spacing={2} size={12}>
        {StaffInfo.map((item, index) => {
          return (
            <Grid key={`${item.name}-${index}`} size={{ xs: 12, md: 6 }}>
              <Item item={item} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}

export default UziaStaff;

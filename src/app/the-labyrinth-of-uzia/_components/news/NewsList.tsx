import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import DUMMY_DATA from './dummy-news-data.json';

type NewsItemTypes = {
  title: string;
  date: string;
  description: string;
}
type NewsListItemProps = {
  item: NewsItemTypes;

}

const NewsListItem = (props: NewsListItemProps) => {
  const { item } = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <CampaignRoundedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary={item.date} />
    </ListItem>
  );
}

export default function FolderList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {DUMMY_DATA.map((item, index) => {
        return <NewsListItem item={item} key={`${item.title}-${index}`} />
      })}
    </List>
  );
}

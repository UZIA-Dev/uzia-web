import React from 'react';
import Button from '@mui/material/Button';
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
      <Button color='inherit'>
        <ListItemAvatar>
          <Avatar>
            <CampaignRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.title} secondary={item.date} />
      </Button>
    </ListItem>
  );
}

export default function FolderList() {
  return (
    <List sx={{ width: '100%' }}>
      {DUMMY_DATA.map((item, index) => {
        return <NewsListItem item={item} key={`${item.title}-${index}`} />
      })}
    </List>
  );
}

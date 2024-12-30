import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import getImageSrcPath from "@/utils/getImageSrcPath";
import { MuiLinkForNextJs as Link } from "@/components/MuiLinkForNextJs";
import DUMMY_DATA from '../../../../../../public/data/dummy-news-data.json';
import _map from "lodash/map";

type NewsListCardProps = {
  title: string;
  imageSource?: string;
  description?: string;
  link?: string;
  date?: string;
}

const NewsListCard = (props: NewsListCardProps) => {
  const { title, imageSource = "/img/16-9.png", description, link, date } = props;
  return (
    <Card className="uzui-news-link-card-container" square elevation={0}>
      <Link href={link || ""} underline="none">
        <CardActionArea className="uzui-news-link-card-action-area-button">
          <div className="uzui-news-link-card-image-container">
            <CardMedia
              className="uzui-news-link-card-image"
              component="img"
              image={getImageSrcPath(imageSource)}
              alt="green iguana"
            />
          </div>
          <CardContent className="uzui-news-link-card-content">
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {date}
            </Typography>
            <Typography variant="h5" component="div" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

const NewsList = () => {
  return (
    <>
      {
        _map(DUMMY_DATA, (item, index) => {
          return (
            <NewsListCard
              key={`${item.title}-${index}`}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          )
        })
      }
    </>
  )
}

export default NewsList;



import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';


function CardSkeleton() {
  return (

    <Card sx={{ maxWidth: 380 }}>
      <CardMedia />
      <Skeleton sx={{ width: '100%', height: 160 }} animation="wave" variant="rectangular" />
      <CardContent >
        <Skeleton
          animation="wave"
          height={30}
          width="66%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton animation="wave" height={40} width="90%" />
      </CardContent>
      <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
        <Skeleton
          animation="wave"
          height={40} width="40%"
        />
        <Skeleton animation="wave" variant="circular" height={20} width={20} />
        <Skeleton animation="wave" variant="circular" height={20} width={20} />
        <Skeleton animation="wave" variant="circular" height={20} width={20} />
        <Skeleton animation="wave" variant="circular" height={20} width={20} />
        <Skeleton animation="wave" height={40} width="10%" />
      </CardActions>
    </Card>
  );

}

export default CardSkeleton

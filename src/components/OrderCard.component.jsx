import React from 'react';
import { 
    Grid, 
    Card, 
    CardHeader, 
    CardContent, 
    CardActions, 
    Button, 
    ListItemText, 
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#ff1744',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'orange',
    },
  }));

const OrderCard = ({ OrderID, Order, OrderAt, CardComp, orderList, setOrderList, finish, setFinish }) => {
    const classes = useStyles();

    const finishOrder = () => {
        let filteredList = orderList.filter((el) => el.id !== CardComp.id)
        setOrderList(filteredList)
        setFinish(finish + 1)
    }

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardHeader className={classes.root} title={`Order ID #${OrderID}`} />
                <CardContent>
                    <List>
                        {Order.map((items, idx) => {
                            return(
                                <ListItem key={idx}>
                                    <ListItemText 
                                        primary={`${items.name} | ${items.varian}`} 
                                        secondary={items.extra.length > 0 ? `Extra: ${items.extra.map(ex => ex)}` : '' }
                                    />
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}> {items.quantity} </Avatar>
                                    </ListItemAvatar>
                                </ListItem>
                            )
                        })}
                        <Divider />
                        <ListItem>
                            <ListItemText primary={`Order At: ${OrderAt}`} />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions>
                    <Button fullWidth color='secondary' variant='contained' onClick={finishOrder}>Mark As Ready</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default OrderCard

import { useState } from "react";
import {
  Avatar,
  Container,
  Grid,
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Components
import OrderList from "./components/OrderList.component";
import Scroll from "./components/Scroll.component";

//Order JSON
import { Order } from "./components/Order";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "green",
  },
}));

function App() {
  const [finish, setFinish] = useState(0);
  const time = new Date().getMilliseconds();
  const classes = useStyles();

  console.log(time);
  return (
    <Container maxWidth="xl">
      <Grid item xs={12} sm={6} md={3}>
        <List>
          <ListItem>
            <ListItemText primary="Order Finished:" />
            <ListItemAvatar>
              <Avatar className={classes.avatar}>{finish}</Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
      </Grid>
      <Scroll>
        <OrderList Order={Order} finish={finish} setFinish={setFinish} />
      </Scroll>
    </Container>
  );
}

export default App;

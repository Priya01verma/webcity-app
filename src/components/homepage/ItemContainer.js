import React from "react";
import { Grid, Box, Typography, makeStyles, createStyles } from "@material-ui/core";

const ItemContainer = props => {
    const classes = useStyles();
    const {
        webData: { items }
    } = props;
    return (
        <Grid container justify="center" className={classes.addPadding}>
            {items.map((itemData, index) => {
                return (
                    <Grid item xl={1} lg={1} md={2} sm={3} xs={4} key={index}>
                        <Box>
                            <img
                                src={itemData.icon}
                                alt={"icon-image"}
                                width={80}
                                height={80}
                                className={classes.imageStyle}
                            />
                            <Typography variant="subtitle1" className={classes.textStyle}>{itemData.name}</Typography>
                        </Box>
                    </Grid>
                );
            })}
        </Grid>
    );
}
const useStyles = makeStyles(theme => {
    return createStyles({
        addPadding: {
            padding:16
        },
        imageStyle:{
            boxShadow: "0 2px 2px rgba(0,0,0,0.5)",
            borderRadius:"50%",
            border: "2px",
            cursor:"pointer",
            "&:hover":{
                transform: "scale(1.03)"
            }
        }
    });
});
export default ItemContainer;

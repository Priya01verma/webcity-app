import React from "react";
import { Box, Typography,makeStyles, createStyles } from "@material-ui/core";


const ItemCard =(props) =>{
    const {subData} = props;
    const classes = useStyles();
    return(
        <Box className={classes.boxStyle}>
            <img src={subData.image} alt={"sub-image"} width={"100%"} height={"100%"} />
            <Typography variant="h6">{subData.name}</Typography>
        </Box>
    )
}

const useStyles = makeStyles(theme => {
    return createStyles({
        boxStyle:{
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            borderRadius: 5,
            cursor:"pointer",
            "&:hover":{
                transform: "scale(1.02)"
            }
        },
    });
});
export default ItemCard;
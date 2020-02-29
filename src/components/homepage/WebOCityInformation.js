import React from "react";
import { Box, Typography, makeStyles, createStyles} from "@material-ui/core";

const WebOCityInfromation =(props) =>{
    const classes = useStyles()
    const {subData} =props;
    return(
        <Box p={1}>
            <Typography className={classes.question}>{subData.question}</Typography>
            <Typography className={classes.answer}>{subData.answer}</Typography>
        </Box>
    )
}
const useStyles = makeStyles(theme => {
    return createStyles({
       question:{
           fontSize: 14,
           fontWeight:'bold',
           margin: "5px 0px",
           textAlign:"left",
           color:"#666"
       },
       answer:{
           fontSize: 12,
           lineHeight: "18px",
           color: "#666",
           textAlign: "left"
       }
    });
});
export default WebOCityInfromation;
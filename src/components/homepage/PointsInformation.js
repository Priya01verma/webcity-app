import React from "react";
import { Box, Typography, makeStyles, createStyles} from "@material-ui/core";

const PointsInformation =(props) =>{
    const {pointsData}= props;
    const classes = useStyles();
    return(
        <Box p={4}>
            {
                pointsData.map((pointData,index) =>{
                    return(
                        <Typography className={classes.pointsStyle} key={index}><strong>{pointData.point}</strong>- {pointData.description}</Typography>
                    )
                })
            }
            
        </Box>
    )
}
const useStyles = makeStyles(theme => {
    return createStyles({
       pointsStyle:{
           fontSize: 14,
           margin: "5px 0px",
           textAlign:"left",
           color:"#666"
       },
    });
});
export default PointsInformation
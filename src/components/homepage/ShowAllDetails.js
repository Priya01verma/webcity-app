import React from "react";
import {
    Grid,
    Box,
    Typography,
    makeStyles,
    createStyles
} from "@material-ui/core";
import ItemCard from "./ItemCard";

const ShowAllDetails = props => {
    const classes = useStyles();
    const { getShowAllDetailData } = props;
    return (
        <Box p={4}>
            <Typography variant="h5">{getShowAllDetailData.heading}</Typography>
            <Grid container spacing={2}>
                <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                    <img
                        src={getShowAllDetailData.mainImage}
                        alt={"main-image"}
                        width={"100%"}
                        height={"100%"}
                        className={classes.imageStyle}
                    />
                </Grid>
                <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <Grid container spacing={3}>
                        {getShowAllDetailData.subImageData.map(
                            (subData, index) => {
                                return (
                                    <Grid
                                        item
                                        xl={4}
                                        lg={4}
                                        md={6}
                                        sm={6}
                                        xs={6}
                                        key={index}
                                    >
                                        <ItemCard subData={subData} />
                                    </Grid>
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = makeStyles(theme => {
    return createStyles({
        imageStyle:{
            boxShadow: "0 2px 2px rgba(0,0,0,0.5)",
            borderRadius: 5,
            cursor:"pointer",
            "&:hover":{
                transform: "scale(1.02)"
            }
        }
    });
});
export default ShowAllDetails;

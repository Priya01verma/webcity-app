import React, { Fragment } from "react";
import {
    Grid,
    Box,
    Typography,
    makeStyles,
    createStyles,
    Button
} from "@material-ui/core";

const BestSellingContainer = props => {
    const {
        webData: {
            best_selling: { sellingcontent }
        }
    } = props;
    const {
        webData: { best_selling }
    } = props;
    const classes = useStyles();
    return (
        <Fragment>
            <Box p={4}>
                <Typography variant="h5" color={"secondary"}>
                    {best_selling.heading}{" "}
                </Typography>
                <Button variant="contained" color="secondary">
                    Primary
                </Button>
                <Grid container justify="center">
                    {sellingcontent.map((selldata, index) => {
                        return (
                            <Grid
                                item
                                xl={3}
                                lg={3}
                                md={6}
                                sm={6}
                                xs={12}
                                key={index}
                            >
                                <Box p={1} className={classes.boxStyle}>
                                    <img
                                        src={selldata.image}
                                        alt={"icon-image"}
                                        width={"100%"}
                                        height={286}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.textStyle}
                                    >
                                        {selldata.description}
                                    </Typography>
                                    <Typography>{selldata.price}</Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Fragment>
    );
};
const useStyles = makeStyles(theme => {
    return createStyles({
        boxStyle: {
            boxShadow: "0 2px 2px rgba(0,0,0,0.5)",
            borderRadius: 5,
            border: "2px",
            cursor: "pointer",
            margin: 6,
            "&:hover": {
                transform: "scale(1.02)"
            }
        },
        textStyle: {
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap"
        }
    });
});
export default BestSellingContainer;

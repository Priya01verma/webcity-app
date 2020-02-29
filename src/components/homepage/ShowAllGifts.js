import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import ItemCard from "./ItemCard";

const showAllGifts = props => {
    const { getShowAllGiftData } = props;
    console.log(getShowAllGiftData);
    return (
        <Box p={4}>
            <Typography variant="h5">{getShowAllGiftData.heading}</Typography>
            <Grid container spacing={3} justify="left">
                {getShowAllGiftData.giftData.map((giftData, index) => {
                    return (
                        <Grid item xl={3} lg={3} md={6} sm={6} xs={12} key={index}>
                            <ItemCard subData={giftData} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
export default showAllGifts;

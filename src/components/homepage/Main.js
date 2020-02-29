import webData from "./json/web-data.json";
import React, { Fragment } from "react";
import ItemContainer from "./ItemContainer";
import BestSellingContainer from "./BestSellingContainer";
import ShowAllDetails from "./ShowAllDetails";
import ShowAllGifts from "./ShowAllGifts";
import ShowAllWebOCityInformation from "./ShowAllWebOCityInformation";
import Faqs from "./Faqs";
import SuggestedBlogs from "./SuggestedBlogs";
import { createStyles, withStyles, Theme } from "@material-ui/core";

const main = props => {
    const { classes } = props;
    return (
        <Fragment>
            <div className={classes.root}>
                <ItemContainer {...props} webData={webData} />
                <BestSellingContainer {...props} webData={webData} />
                <ShowAllDetails
                    {...props}
                    getShowAllDetailData={webData.allflowers}
                />
                <ShowAllDetails
                    {...props}
                    getShowAllDetailData={webData.allCakes}
                />
                <ShowAllDetails
                    {...props}
                    getShowAllDetailData={webData.flowerCombos}
                />
                <ShowAllDetails
                    {...props}
                    getShowAllDetailData={webData.giftDelivery}
                />
                <ShowAllGifts
                    {...props}
                    getShowAllGiftData={webData.personsalizedGift}
                />
                <ShowAllGifts
                    {...props}
                    getShowAllGiftData={webData.ediablesGift}
                />
                <ShowAllWebOCityInformation
                    getAllWebData={webData.webCityInformation}
                />

                <Faqs customerFaqs={webData.faqs} />
                <SuggestedBlogs blogsData={webData.freshSuggestedBlogs} />
            </div>
        </Fragment>
    );
};
const STYLES = Theme =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column"
            // alignItems: 'center'
        }
    });
export default withStyles(STYLES)(main);

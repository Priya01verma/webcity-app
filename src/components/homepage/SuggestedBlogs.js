import React from "react";
import {
    Grid,
    Box,
    Typography,
    makeStyles,
    createStyles
} from "@material-ui/core";

const SuggestedBlogs = props => {
    const { blogsData } = props;
    const classes = useStyles();
    return (
        <Box p={4}>
            <Typography variant="h5">{blogsData.heading}</Typography>
            <Grid container spacing={2}>
                {blogsData.blogData.map((blog, index) => {
                    return (
                        <Grid
                            item
                            xl={4}
                            lg={4}
                            md={4}
                            sm={12}
                            xs={12}
                            key={index}
                        >
                            <Typography className={classes.blogHeading}>
                                {blog.heading}
                            </Typography>
                            <Typography className={classes.blogDescription}>
                                {blog.description}....
                                <a
                                    href={blog.link}
                                    className={classes.linkStyle}
                                >
                                    {" "}
                                    Read More...
                                </a>
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
const useStyles = makeStyles(theme => {
    return createStyles({
        blogHeading: {
            fontSize: 16,
            fontWeight: "bold",
            margin: "8px 0px",
            textAlign: "left"
        },
        blogDescription: {
            fontSize: 14,
            lineHeight: "20px",
            color: "#666",
            textAlign: "left"
        },
        linkStyle: {
            textDecoration: "none",
            fontSize: 16,
            lineHeight: "22px",
            color: "#31afac"
        }
    });
});
export default SuggestedBlogs;

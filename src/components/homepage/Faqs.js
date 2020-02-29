import React from "react";
import { Box, Typography, makeStyles,  createStyles} from "@material-ui/core";

const CustomerFaqs = props => {
    const { customerFaqs = {} } = props;
    const classes = useStyles();
    return (
        <Box p={4}>
            <Typography variant="h4">{customerFaqs.heading}</Typography>
            {customerFaqs.faq.map((faqData, index) => {
                return (
                    <Box key={index}>
                        <Typography className={classes.question}>{faqData.question}</Typography>
                        <Typography className={classes.answer}><strong>Ans:</strong> {faqData.answer}</Typography>
                    </Box>
                );
            })}
        </Box>
    );
};
const useStyles = makeStyles(theme => {
    return createStyles({
       question:{
           fontSize: 16,
           fontWeight:'bold',
           margin: "8px 0px",
           textAlign:"left"
       },
       answer:{
           fontSize: 14,
           lineHeight: "20px",
           color: "#666",
           textAlign: "left"
       }
    });
});
export default CustomerFaqs;

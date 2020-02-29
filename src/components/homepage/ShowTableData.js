import React from "react";
import {
    Box,
    Typography,
    makeStyles,
    createStyles,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow
} from "@material-ui/core";

const ShowTableData = props => {
    const { tableData } = props;
    const classes = useStyles();
    return (
        <Box p={4}>
            <Typography className={classes.headingStyle}>{tableData.heading}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableData.webCity_tableHeading.map(
                            (heading, index) => {
                                return (
                                    <TableCell key={index}>{heading}</TableCell>
                                );
                            }
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.webCity_tableData.map((tableData, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{tableData.type}</TableCell>
                                <TableCell>{tableData.variety}</TableCell>
                                <TableCell>{tableData.speciality}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Box>
    );
};
const useStyles = makeStyles(theme => {
    return createStyles({
       headingStyle:{
           fontSize: 14,
           fontWeight:'bold',
           margin: "5px 0px",
           textAlign:"left",
           color:"#666"
       }
    })
    });
export default ShowTableData;

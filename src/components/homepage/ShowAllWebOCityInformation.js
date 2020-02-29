import React, { Fragment } from "react";
import {  Box } from "@material-ui/core";
import WebOCityInformation from "./WebOCityInformation";
import PointsInformation from "./PointsInformation";
import ShowTableData from "./ShowTableData";

const showAllWebOCityInformation = props => {
    const { getAllWebData } = props;
    console.log(getAllWebData);
    return (
        <Fragment>
            <Box p={2}>
                {getAllWebData.webCityInformation1.map((webCityData, index) => {
                    return (
                        <WebOCityInformation
                            key={index}
                            subData={webCityData}
                        />
                    );
                })}
                <ShowTableData
                    tableData={getAllWebData.webCityTableInformation1}
                />
                {getAllWebData.webCityInformation2.map((webCityData, index) => {
                    return (
                        <WebOCityInformation
                            key={index}
                            subData={webCityData}
                        />
                    );
                })}
                <WebOCityInformation
                    subData={getAllWebData.webCityInformation3}
                />
                <PointsInformation
                    pointsData={
                        getAllWebData.webCityInformation3.points_description
                    }
                />
                <ShowTableData
                    tableData={getAllWebData.webCityTableInformation2}
                />
                <WebOCityInformation
                    subData={getAllWebData.webCityInformation4}
                />
            </Box>
        </Fragment>
    );
};
export default showAllWebOCityInformation;

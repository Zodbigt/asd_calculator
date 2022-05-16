import { Grid } from "@mui/material";
import React, { Component } from "react";
const MAX_COLUMNS = 12;
/**
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 900px
 * lg, large: 1200px
 * xl, extra-large: 1536px
*/

export default class GridView extends Component {

    render() {
        const itemList = this.props.itemList;
        return (
            <Grid
                container
                style={this.props.style}
                spacing={this.props.gap + "px"}
            >
                {this.renderGridItemList(itemList)}
            </Grid>
        );
    }

    renderGridItemList(itemList) {
        return itemList.map((item, index) => this.renderGridItem(item, index));
    }

    renderGridItem(item, index) {
        const breakPoints = this.props.breakPoints;
        return (
            <Grid
                item
                style={this.props.itemStyle}
                key={index}
                xs={MAX_COLUMNS / breakPoints.xs}
                sm={MAX_COLUMNS / breakPoints.sm}
                md={MAX_COLUMNS / breakPoints.md}
                lg={MAX_COLUMNS / breakPoints.lg}
                xl={MAX_COLUMNS / breakPoints.xl}
            >
                {item}
            </Grid>
        );
    }
}
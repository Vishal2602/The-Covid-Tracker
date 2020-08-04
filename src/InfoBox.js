import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, isRed, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && `infoBox--selected`} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent className="infoBox__content">
        {/* title */}
        <Typography className="infoBox__title">{title}</Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox--green"}`}>
          {cases}
        </h2>
        <Typography color="textSecondary" className="infoBox__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

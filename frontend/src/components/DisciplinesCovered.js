import { React } from "react";
import ListItemWithIcon from "./ListItemWithIcon";

export default function DisciplinedCovered() {
    return (
        <div className="container">
            <div className="my-custom-tab">
                <div className="row my-custom-tab-header">
                    <div className="col tab-btn active-btn">programming</div>
                    <div className="col tab-btn">Calculations</div>
                </div>

                <div className="my-custom-tab-body">
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                    <ListItemWithIcon></ListItemWithIcon>
                </div>
            </div>
        </div>
    );
}
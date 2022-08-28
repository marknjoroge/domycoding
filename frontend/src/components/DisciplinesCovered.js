import { useState } from "react";
import ListItemWithIcon from "./ListItemWithIcon";
import './DisciplinesCovered.css';

export default function DisciplinesCovered() {
    const [disciplinesToggleState, setDisciplinesToggleState] = useState(1);

    const disciplinesTab = (index) => {
        setDisciplinesToggleState(index);
    };

    return (
        <div id="disciplines-covered" className="container">
            <div className="a-container">

                <div className="custom-title">Programming disciplines we cover</div>

                <div id="disciplines-tab" className="my-custom-tab">
                    <div className="row my-custom-tab-header">
                        <div
                            className={disciplinesToggleState === 1 ? "col tab-btn active-btn" : "col tab-btn"}
                            onClick={() => disciplinesTab(1)}
                        >
                            programming
                        </div>
                        <div
                            className={disciplinesToggleState === 2 ? "col tab-btn active-btn" : "col tab-btn"}
                            onClick={() => disciplinesTab(2)}
                        >
                            Calculations
                        </div>
                    </div>

                    <div className={disciplinesToggleState === 1 ? "my-custom-tab-body" : "hidden-body"}>
                        <ListItemWithIcon></ListItemWithIcon>
                        <ListItemWithIcon></ListItemWithIcon>
                        <ListItemWithIcon></ListItemWithIcon>
                        <ListItemWithIcon></ListItemWithIcon>
                    </div>

                    <div className={disciplinesToggleState === 2 ? "my-custom-tab-body" : "hidden-body"}>
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
        </div >
    );
}

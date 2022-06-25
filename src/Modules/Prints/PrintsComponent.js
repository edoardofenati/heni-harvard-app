import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {getPrintsPage} from "./PrintsActions";
import {PrintCard} from "./PrintsCardComponent";
import {Button, Col, Row} from "react-bootstrap";
import {SmallSpinner} from "../Core/LoadingSpinner/SmallSpinnerComponent";
import uuid from "uuid";

const Prints = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const {printsList, loadingPrintsList} = useSelector((state) => state.prints);

    useEffect(() => {
        dispatch(getPrintsPage(page));
    }, [page, dispatch]);

    const onClickEvent = (e) => {
        setPage(page + 1);
    };

    // check when last element is loaded in order to  disable the "load More" button
    const lastElementLoaded = () => {
        if (printsList?.length) {
            const lastPrint = printsList[printsList.length - 1];
            return lastPrint.number === lastPrint.totalNumber;
        }
        return false;
    };

    return (
        <div>
            <div className={"mt-5"}>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {printsList &&
                        printsList.map((print) => {
                            return (
                                <Col key={uuid()} className={"d-flex justify-content-around align-self-start"}>
                                    <PrintCard print={print} />
                                </Col>
                            );
                        })}
                </Row>
            </div>
            <div className={"text-center"}>
                <Button
                    disabled={lastElementLoaded()}
                    variant="secondary"
                    size="lg"
                    onClick={() => {
                        onClickEvent();
                    }}
                >
                    Load More
                </Button>

                {loadingPrintsList && <SmallSpinner />}
            </div>
        </div>
    );
};

export default withRouter(Prints);

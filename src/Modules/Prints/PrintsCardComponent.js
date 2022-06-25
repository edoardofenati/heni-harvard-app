import {Card, Carousel} from "react-bootstrap";
import React from "react";

// fixing the size of the card and also the image I am getting from the print link
const CARD_WIDTH_PX = 400;

export const PrintCard = ({print}) => {
    return (
        <Card style={{width: `${CARD_WIDTH_PX}px`}}>
            {print?.images && (
                <Carousel>
                    {print.images.map((image) => {
                        return (
                            <Carousel.Item key={image.baseimageurl}>
                                <img
                                    className="d-block w-100"
                                    src={`${image.baseimageurl}?width=${CARD_WIDTH_PX}`}
                                    alt="card"
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )}

            <Card.Body>
                <Card.Title>
                    {print.title} ({print.dated})
                </Card.Title>
                <Card.Subtitle>{print.division}</Card.Subtitle>
                <Card.Text>
                    {print.medium && <span>({print.medium})</span>}
                    <br />
                    <span className={"font-weight-light"}>{print.provenance}</span>
                </Card.Text>

                <div className={"d-flex justify-content-end font-weight-light"}>
                    {print.number} of {print.totalNumber}
                </div>
            </Card.Body>
        </Card>
    );
};

// @flow

import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Row, Col, Avatar } from "antd";
import moment from "moment";
import idx from "idx";

import type { FlightItemHeader_flight as FlightHeaderType } from "./__generated__/FlightItemHeader_flight.graphql";

type Props = {
  flight: FlightHeaderType
};

const FlightItemHeader = ({ flight }: Props) => {
  const durationFormatted = moment.duration(flight.duration, "minutes");
  const departureTime = idx(flight, _ => _.departure.localTime);
  const arrivalTime = idx(flight, _ => _.arrival.localTime);
  const departureName = idx(flight, _ => _.departure.airport.city.name);
  const arrivalName = idx(flight, _ => _.arrival.airport.city.name);
  const departureId = idx(flight, _ => _.departure.airport.locationId);
  const arrivalId = idx(flight, _ => _.arrival.airport.locationId);
  const priceAmount = idx(flight, _ => _.price.amount) || "?";
  const priceCurrency = idx(flight, _ => _.price.currency) || "";
  const legs = flight.legs || [];
  return (
    <div>
      <Row>
        <Col span={6}>
          <Row>
            {legs.length &&
              legs.map(leg => {
                if (leg) {
                  const logoUrl = idx(leg, _ => _.airline.logoUrl);
                  const airlineName = idx(leg, _ => _.airline.name) || "";
                  return (
                    <Col key={leg.id} style={{ marginBottom: 10 }}>
                      {logoUrl ? (
                        <img
                          src={logoUrl}
                          alt={airlineName}
                          width={32}
                          height={32}
                          style={{ marginRight: 10 }}
                        />
                      ) : (
                        <Avatar shape="square">{airlineName}</Avatar>
                      )}
                      <span>{airlineName}</span>
                    </Col>
                  );
                }
                return null;
              })}
          </Row>
        </Col>
        <Col span={4}>
          <Row>
            <time dateTime={departureTime}>
              {moment.utc(departureTime).format("HH:MM")}
            </time>
            <span> - </span>
            <time dateTime={arrivalTime}>
              {moment.utc(arrivalTime).format("HH:MM")}
            </time>
          </Row>
          <Row>
            <time dateTime={departureTime}>
              {moment.utc(departureTime).format("dd MMM D")}
            </time>
          </Row>
        </Col>
        <Col span={4}>
          {durationFormatted.hours()}h {durationFormatted.minutes()}m
        </Col>
        <Col span={6}>
          {departureName} ({departureId}) - {arrivalName} ({arrivalId})
        </Col>
        <Col span={4}>
          <div className="price">
            {priceAmount} {priceCurrency}
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .price {
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default createFragmentContainer(
  FlightItemHeader,
  graphql`
    fragment FlightItemHeader_flight on Flight {
      legs {
        id
        airline {
          name
          logoUrl
        }
      }
      departure {
        localTime
        airport {
          locationId
          city {
            name
          }
        }
      }
      arrival {
        localTime
        airport {
          locationId
          city {
            name
          }
        }
      }
      duration
      price {
        amount
        currency
      }
    }
  `
);

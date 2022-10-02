import React from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/List";
import { getFilteredEvents } from "../../dummy-data";
import ResultTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

const SelectedEvents = () => {
  const route = useRouter();
  const year = +route.query.slug[0];
  const month = +route.query.slug[1];

  if (!year || !month) {
    return <p className="center"> Loading ... </p>;
  }

  const filteredEvents = getFilteredEvents({
    year,
    month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
  // return <></>
};

export default SelectedEvents;

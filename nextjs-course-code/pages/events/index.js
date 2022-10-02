import React from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/List";
import Select from "../../components/filter/Select";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <Select onSearch={findEventsHandler} />
      <EventList events={events} />
    </div>
  );
};

export default AllEventsPage;

import classes from './List.module.css';
import React from "react";
import Card from "./Card";
const List = ({ events}) => {
  return (
    <div className={classes.list}>
      {events.map((event) => (
        <Card
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        ></Card>
      ))}
    </div>
  );
};

export default List;

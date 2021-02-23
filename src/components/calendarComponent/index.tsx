import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export class Calendar extends React.Component {
  state = {
    weekendsVisible: false,
    events: [
      {
        // this object will be "parsed" into an Event Object
        title: "The Title", // a property!
        start: "2021-02-23T20:00:00+01:00", // a property!
        end: "2021-02-23T21:30:00+01:00", // a property! ** see important note below about 'end' **
      },
    ],
  };
  handleDateSelect = (e: any) => {
    console.log(e);
  };

  handleEventClick() {
    console.log("handleEventClick");
  }

  handleEvents() {
    console.log("handleEvents");
  }

  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={this.state.weekendsVisible}
        eventAdd={function () {
          console.log("add");
        }}
        initialEvents={this.state.events} // alternatively, use the `events` setting to fetch from a feed
        select={(e) => this.handleDateSelect(e)}
        // eventContent={renderEventContent} // custom render function
        eventClick={this.handleEventClick}
        eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        // /* you can update a remote database when these fire:

        eventChange={function () {
          console.log("eventChange");
        }}
        eventRemove={function () {
          console.log("eventRemove");
        }}
      />
    );
  }
}

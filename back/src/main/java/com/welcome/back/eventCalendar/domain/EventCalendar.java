package com.welcome.back.eventCalendar.domain;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "event_calendar")
public class EventCalendar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "calendar_id")
    private Long calendarId;

    @Column(name = "event_id", nullable = false)
    private Long eventId;

    @Column(name = "event_date", nullable = false)
    private LocalDate eventDate;
}

package com.welcome.back.eventCalendar;

import com.welcome.back.eventCalendar.domain.EventCalendar;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface EventCalendarRepository extends JpaRepository<EventCalendar, Long> {
    List<EventCalendar> findAllByEventDate(LocalDate eventDate);
    Optional<EventCalendar> findByEventId(Long eventId);
    void deleteAllByEventId(Long eventId);
}
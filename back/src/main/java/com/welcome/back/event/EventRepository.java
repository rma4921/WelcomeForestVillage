package com.welcome.back.event;

import com.welcome.back.event.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByEventIdIn(List<Long> eventIds);
}

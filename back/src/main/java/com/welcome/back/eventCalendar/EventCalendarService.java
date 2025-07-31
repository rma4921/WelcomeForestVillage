package com.welcome.back.eventCalendar;

import com.welcome.back.event.dto.AddEventRequestDto;
import com.welcome.back.event.dto.EventResponseDto;
import com.welcome.back.event.dto.UpdateEventRequestDto;
import com.welcome.back.event.domain.Event;
import com.welcome.back.eventCalendar.domain.EventCalendar;
import com.welcome.back.event.EventRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class EventCalendarService {

    private final EventRepository eventRepository;
    private final EventCalendarRepository eventCalendarRepository;

    // 행사 작성
    public void addEvent(AddEventRequestDto dto) {
        Event event = new Event();
        event.setUserId(dto.getUserId());
        event.setTitle(dto.getTitle());
        event.setContent(dto.getContent());
        event.setDate(dto.getDate());
        event.setLocation(dto.getLocation());
        event.setCreatedAt(LocalDateTime.now());
        event.setUpdatedAt(LocalDateTime.now());
        event = eventRepository.save(event);

        EventCalendar calendar = new EventCalendar();
        calendar.setEventId(event.getEventId());
        calendar.setEventDate(dto.getEventDate().toLocalDate());
        eventCalendarRepository.save(calendar);
    }

    public List<EventResponseDto> getEventsByDate(Date date) {
        List<EventCalendar> calendars = eventCalendarRepository.findAllByEventDate(date.toLocalDate());
        List<Long> eventIds = calendars.stream()
                .map(EventCalendar::getEventId)
                .collect(Collectors.toList());

        return eventRepository.findByEventIdIn(eventIds).stream()
                .map(e -> new EventResponseDto(e.getEventId(), e.getTitle(), e.getContent(), e.getDate(), e.getLocation()))
                .collect(Collectors.toList());
    }

    // 행사 수정
    public void updateEvent(Long eventId, UpdateEventRequestDto dto) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new EntityNotFoundException("Event not found: " + eventId));
        event.setTitle(dto.getTitle());
        event.setContent(dto.getContent());
        event.setDate(dto.getDate());
        event.setLocation(dto.getLocation());
        event.setUpdatedAt(LocalDateTime.now());
        eventRepository.save(event);

        EventCalendar calendar = eventCalendarRepository.findByEventId(eventId)
                .orElseThrow(() -> new EntityNotFoundException("EventCalendar not found for event: " + eventId));
        calendar.setEventDate(dto.getEventDate().toLocalDate());
        eventCalendarRepository.save(calendar);
    }

    // 행사 삭제
    public void deleteEvent(Long eventId) {
        eventCalendarRepository.deleteAllByEventId(eventId);

        if (!eventRepository.existsById(eventId)) {
            throw new EntityNotFoundException("행사가 존재하지 않음: " + eventId);
        }
        eventRepository.deleteById(eventId);
    }
}
package com.welcome.back.eventCalendar;

import com.welcome.back.event.dto.AddEventRequestDto;
import com.welcome.back.event.dto.EventResponseDto;
import com.welcome.back.event.dto.UpdateEventRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

// 행사
@RestController
@RequestMapping("/notifications/events")
@RequiredArgsConstructor
public class EventCalendarController {

    private final EventCalendarService calendarService;

    // 행사 추가
    @PostMapping
    public void addEvent(@RequestBody AddEventRequestDto dto) {
        calendarService.addEvent(dto);
    }

    // 행사 조회
    @GetMapping
    public List<EventResponseDto> getEventsByDate(@RequestParam("date")
                                                  @DateTimeFormat(pattern = "yyyy-MM-dd")
                                                  LocalDate date) {
        return calendarService.getEventsByDate(Date.valueOf(date));
    }

    // 행사 수정
    @PutMapping("/{id}")
    public void updateEvent(@PathVariable("id") Long eventId,
                            @RequestBody UpdateEventRequestDto dto) {
        calendarService.updateEvent(eventId, dto);
    }

    // 행사 삭제
    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable("id") Long eventId) {
        calendarService.deleteEvent(eventId);
    }
}

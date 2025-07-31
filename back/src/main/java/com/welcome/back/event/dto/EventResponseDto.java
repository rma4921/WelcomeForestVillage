package com.welcome.back.event.dto;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventResponseDto {
    private Long eventId;
    private String title;
    private String content;
    private LocalDateTime date;
    private String location;
}

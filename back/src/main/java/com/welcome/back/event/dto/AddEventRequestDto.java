package com.welcome.back.event.dto;

import lombok.*;
import java.time.LocalDateTime;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddEventRequestDto {
    private Long userId;
    private String title;
    private String content;
    private LocalDateTime date;
    private String location;
    private Date eventDate;
}


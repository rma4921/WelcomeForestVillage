package com.welcome.back.notice.dto;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NoticeResponseDto {
    private Long noticeId;
    private Long userId;
    private String title;
    private String content;
    private Boolean isPinned;
    private String city;
    private String district;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

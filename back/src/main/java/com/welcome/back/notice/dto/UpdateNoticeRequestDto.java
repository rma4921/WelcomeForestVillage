package com.welcome.back.notice.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateNoticeRequestDto {
    private String title;
    private String content;
    private Boolean isPinned;
    private String city;
    private String district;
}

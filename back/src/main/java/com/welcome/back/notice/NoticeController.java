package com.welcome.back.notice;

import com.welcome.back.notice.dto.AddNoticeRequestDto;
import com.welcome.back.notice.dto.UpdateNoticeRequestDto;
import com.welcome.back.notice.dto.NoticeResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// 마을 공지
@RestController
@RequestMapping("/notifications")
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;

    // 공지 목록 조회 & 검색 & 지역 카테고리
    @GetMapping
    public ResponseEntity<List<NoticeResponseDto>> listNotices(
            @RequestParam(value="search",   required=false) String search,
            @RequestParam(value="city",     required=false) String city,
            @RequestParam(value="district", required=false) String district
    ) {
        List<NoticeResponseDto> list;
        if (search != null && !search.isBlank()) {
            list = noticeService.searchNotices(search);
        } else if (city != null && district != null && !city.isBlank() && !district.isBlank()) {
            list = noticeService.getByCityAndDistrict(city, district);
        } else {
            list = noticeService.getAllNotices();
        }
        return ResponseEntity.ok(list);
    }

    // 공지 작성
    @PostMapping
    public ResponseEntity<Void> createNotice(@RequestBody AddNoticeRequestDto dto) {
        noticeService.addNotice(dto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    // 공지 수정
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateNotice(@PathVariable Long id,
                                             @RequestBody UpdateNoticeRequestDto dto) {
        noticeService.updateNotice(id, dto);
        return ResponseEntity.noContent().build();
    }

    // 공지 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotice(@PathVariable Long id) {
        noticeService.deleteNotice(id);
        return ResponseEntity.noContent().build();
    }

    // 공지 고정
    @PatchMapping("/{id}")
    public ResponseEntity<Void> pinNotice(
            @PathVariable Long id,
            @RequestParam("pinned") boolean pinned
    ) {
        noticeService.pinNotice(id, pinned);
        return ResponseEntity.noContent().build();
    }
}

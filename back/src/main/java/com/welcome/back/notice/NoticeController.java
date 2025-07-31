package com.welcome.back.notice;

import com.welcome.back.notice.dto.AddNoticeRequestDto;
import com.welcome.back.notice.dto.UpdateNoticeRequestDto;
import com.welcome.back.notice.dto.NoticeResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/notifications")
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;

    // 공지 목록 조회
    @GetMapping
    public ResponseEntity<List<NoticeResponseDto>> listNotices() {
        return ResponseEntity.ok(noticeService.getAllNotices());
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
}

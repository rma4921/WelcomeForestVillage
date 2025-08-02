package com.welcome.back.notice;

import com.welcome.back.notice.domain.Notice;
import com.welcome.back.notice.dto.AddNoticeRequestDto;
import com.welcome.back.notice.dto.UpdateNoticeRequestDto;
import com.welcome.back.notice.dto.NoticeResponseDto;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class NoticeService {
    private final NoticeRepository noticeRepository;

    // 공지 작성
    public void addNotice(AddNoticeRequestDto dto) {
        Notice notice = new Notice();
        notice.setUserId(dto.getUserId());
        notice.setTitle(dto.getTitle());
        notice.setContent(dto.getContent());
        notice.setIsPinned(dto.getIsPinned() != null ? dto.getIsPinned() : false);
        notice.setCity(dto.getCity());
        notice.setDistrict(dto.getDistrict());
        notice.setCreatedAt(LocalDateTime.now());
        notice.setUpdatedAt(LocalDateTime.now());
        noticeRepository.save(notice);
    }

    // 공지 전체 조회
    public List<NoticeResponseDto> getAllNotices() {
        return noticeRepository.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    // 공지 수정
    public void updateNotice(Long id, UpdateNoticeRequestDto dto) {
        Notice notice = noticeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("마을 공지 존재하지 않음: " + id));
        notice.setTitle(dto.getTitle());
        notice.setContent(dto.getContent());
        notice.setIsPinned(dto.getIsPinned());
        notice.setCity(dto.getCity());
        notice.setDistrict(dto.getDistrict());
        notice.setUpdatedAt(LocalDateTime.now());
        noticeRepository.save(notice);
    }

    // 공지 삭제
    public void deleteNotice(Long id) {
        if (!noticeRepository.existsById(id)) {
            throw new EntityNotFoundException("마을 공지 존재하지 않음: " + id);
        }
        noticeRepository.deleteById(id);
    }

    // 공지 고정
    public void pinNotice(Long id, boolean pinned) {
        Notice notice = noticeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("마을 공지 존재하지 않음: " + id));
        notice.setIsPinned(pinned);
        notice.setUpdatedAt(LocalDateTime.now());
        noticeRepository.save(notice);
    }

    // 공지 검색
    public List<NoticeResponseDto> searchNotices(String keyword) {
        return noticeRepository
                .findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(keyword, keyword)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    // 시+구 조회
    public List<NoticeResponseDto> getByCityAndDistrict(String city, String district) {
        return noticeRepository.findAllByCityAndDistrictOrderByCreatedAtDesc(city, district)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private NoticeResponseDto toDto(Notice n) {
        return new NoticeResponseDto(
                n.getNoticeId(),
                n.getUserId(),
                n.getTitle(),
                n.getContent(),
                n.getIsPinned(),
                n.getCity(),
                n.getDistrict(),
                n.getCreatedAt(),
                n.getUpdatedAt()
        );
    }
}
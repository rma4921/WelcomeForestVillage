package com.welcome.back.notificationSetting.domain;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "notification_setting")
public class NotificationSetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id")
    private Long profileId;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "policy_noti", nullable = false)
    private Boolean policyNoti;

    @Column(name = "event_noti", nullable = false)
    private Boolean eventNoti;

    @Column(name = "notice_noti", nullable = false)
    private Boolean noticeNoti;

    @Column(name = "support_noti", nullable = false)
    private Boolean supportNoti;
}

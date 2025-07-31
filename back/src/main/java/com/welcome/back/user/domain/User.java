package com.welcome.back.user.domain;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(nullable = false)
    private String role; // TODO: consider Enum

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted;

    @Column(name = "deleted_date")
    private LocalDateTime deletedDate;

    @Column(name = "phone_num", nullable = false, length = 20)
    private String phoneNum;

    @Column(nullable = false, length = 100)
    private String provider;

    @Column(nullable = false)
    private Boolean gender;

    @Column(nullable = false)
    private Integer age;

    @Column(nullable = false, length = 200)
    private String address;

    @Column(nullable = false, length = 10)
    private String nickname;
}
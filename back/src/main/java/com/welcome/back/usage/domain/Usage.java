package com.welcome.back.usage.domain;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usage")
public class Usage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usage_id")
    private Long usageId;

    @Column(name = "support_id", nullable = false)
    private Long supportId;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false)
    private String location;

    @Column(name = "vote_count", nullable = false)
    private Integer voteCount;
}

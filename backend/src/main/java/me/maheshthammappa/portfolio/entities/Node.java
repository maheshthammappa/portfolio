package me.maheshthammappa.portfolio.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import me.maheshthammappa.portfolio.enums.ContentType;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Node {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String content;
    private Long parentId;

    @Enumerated(EnumType.STRING)
    private ContentType type;

    private Integer displayOrder;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

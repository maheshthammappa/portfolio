package me.maheshthammappa.portfolio.dtos;

import lombok.Builder;
import me.maheshthammappa.portfolio.enums.ContentType;

@Builder
public record NodeDto(
        Long id,
        String name,
        String slug,
        String content,
        Long parentId,
        ContentType type,
        Integer displayOrder
) {
}

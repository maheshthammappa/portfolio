package me.maheshthammappa.portfolio.dtos;

import me.maheshthammappa.portfolio.enums.ContentType;

public record NodeRequestDto(
        String name,
        String content,
        Long parentId,
        String slug,
        ContentType type
) {
}

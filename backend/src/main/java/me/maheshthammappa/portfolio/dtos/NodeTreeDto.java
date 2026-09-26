package me.maheshthammappa.portfolio.dtos;

import me.maheshthammappa.portfolio.enums.ContentType;

import java.util.List;

public record NodeTreeDto(
        Long id,
        String name,
        String slug,
        String content,
        ContentType type,
        List<NodeTreeDto> children
) {
}

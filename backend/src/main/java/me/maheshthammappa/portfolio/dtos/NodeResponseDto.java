package me.maheshthammappa.portfolio.dtos;

import lombok.Builder;
import me.maheshthammappa.portfolio.enums.ContentType;

@Builder
public record NodeResponseDto(
        Long id,
        String name,
        String slug,
        ContentType type
) {
}

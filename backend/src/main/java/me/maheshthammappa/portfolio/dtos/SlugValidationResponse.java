package me.maheshthammappa.portfolio.dtos;

public record SlugValidationResponse(
        Boolean isValid,
        String slug
) {
}

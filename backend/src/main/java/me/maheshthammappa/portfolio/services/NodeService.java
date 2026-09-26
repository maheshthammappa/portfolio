package me.maheshthammappa.portfolio.services;

import me.maheshthammappa.portfolio.dtos.*;

import java.util.List;

public interface NodeService {
    NodeTreeDto getNodeTree(Long nodeId);
    NodeDto getNodeById(Long nodeId);
    List<NodeResponseDto> getChildren(Long parentId);
    NodeResponseDto createNode(NodeRequestDto request);
    NodeResponseDto updateNode(Long nodeId, NodeRequestDto request);
    Boolean deleteNode(Long nodeId);
    void reOrderNodes(List<Long> orderIds);
    SlugValidationResponse validateSlug(String slug);
}

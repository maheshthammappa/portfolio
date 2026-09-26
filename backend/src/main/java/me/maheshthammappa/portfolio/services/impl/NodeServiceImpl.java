package me.maheshthammappa.portfolio.services.impl;

import jakarta.transaction.Transactional;
import me.maheshthammappa.portfolio.dtos.*;
import me.maheshthammappa.portfolio.entities.Node;
import me.maheshthammappa.portfolio.exceptions.NodeNotFoundException;
import me.maheshthammappa.portfolio.repositories.NodeRepository;
import me.maheshthammappa.portfolio.services.NodeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NodeServiceImpl implements NodeService {
    private final NodeRepository nodeRepository;

    public NodeServiceImpl(NodeRepository nodeRepository) {
        this.nodeRepository = nodeRepository;
    }

    private NodeResponseDto mapToNodeResponseDto(Node node) {
        return NodeResponseDto.builder()
                .id(node.getId())
                .name(node.getName())
                .slug(node.getSlug())
                .type(node.getType())
                .build();
    }

    private void validateSlugBeforeSave(String slug) {
        if (!slug.matches("^[a-z0-9-]+$")) {
            throw new IllegalArgumentException("Invalid slug format. Use only lowercase letters, numbers, and hyphens.");
        }
        if (nodeRepository.existsBySlug(slug)) {
            throw new IllegalArgumentException("Slug is already taken.");
        }
    }


    @Override
    public NodeTreeDto getNodeTree(Long nodeId) {
        Node node = nodeRepository.findById(nodeId)
                .orElseThrow(() -> new NodeNotFoundException("Node not found with id: " + nodeId));
        return buildTreeRecursively(node);
    }

    private NodeTreeDto buildTreeRecursively(Node node) {
        List<Node> children = nodeRepository.findByParentIdOrderByDisplayOrder(node.getId());

        List<NodeTreeDto> childrenDtos = children.stream()
                .map(this::buildTreeRecursively)
                .toList();

        return new NodeTreeDto(
                node.getId(),
                node.getName(),
                node.getSlug(),
                node.getContent(),
                node.getType(),
                childrenDtos
        );
    }


    @Override
    public NodeDto getNodeById(Long nodeId) {
        Node node = nodeRepository.findById(nodeId)
                .orElseThrow(() -> new NodeNotFoundException("Node not found with the id " + nodeId));

        return NodeDto.builder()
                .id(node.getId())
                .name(node.getName())
                .slug(node.getSlug())
                .content(node.getContent())
                .parentId(node.getParentId())
                .type(node.getType())
                .displayOrder(node.getDisplayOrder())
                .build();
    }

    @Override
    public List<NodeResponseDto> getChildren(Long parentId) {
        List<Node> nodes;

        if (parentId == null) {
            nodes = nodeRepository.findByParentIdIsNullOrderByDisplayOrder();
        } else {
            nodes = nodeRepository.findByParentIdOrderByDisplayOrder(parentId);
        }
        return nodes.stream()
                .map(node -> new NodeResponseDto(
                        node.getId(),
                        node.getName(),
                        node.getSlug(),
                        node.getType()
                )).toList();
    }

    @Override
    public NodeResponseDto createNode(NodeRequestDto request) {
        Node node = new Node();
        node.setContent(request.content());
        node.setName(request.name());
        node.setParentId(request.parentId());

        validateSlugBeforeSave(request.slug());
        node.setSlug(request.slug());
        node.setType(request.type());

        Integer maxOrder = nodeRepository.findMaxDisplayOrderByParentId(request.parentId());
        node.setDisplayOrder(maxOrder == null ? 10 : maxOrder + 10);

        Node response = nodeRepository.save(node);
        return mapToNodeResponseDto(response);
    }

    @Override
    public NodeResponseDto updateNode(Long nodeId, NodeRequestDto request) {
        Node node = nodeRepository.findById(nodeId)
                .orElseThrow(() -> new NodeNotFoundException("Node not found with the id " + nodeId));
        node.setContent(request.content());
        node.setName(request.name());
        node.setParentId(request.parentId());
        validateSlugBeforeSave(request.slug());
        node.setSlug(request.slug());
        node.setType(request.type());

        Node response = nodeRepository.save(node);
        return mapToNodeResponseDto(response);
    }

    @Override
    @Transactional
    public Boolean deleteNode(Long nodeId) {
        if (!nodeRepository.existsById(nodeId)) {
            throw new NodeNotFoundException("Node not found with id: " + nodeId);
        }

        deleteNodeRecursively(nodeId);
        return true;
    }

    private void deleteNodeRecursively(Long nodeId) {
        List<Node> children = nodeRepository.findByParentIdOrderByDisplayOrder(nodeId);

        for (Node child : children) {
            deleteNodeRecursively(child.getId());
        }

        nodeRepository.deleteById(nodeId);
    }


    @Override
    @Transactional
    public void reOrderNodes(List<Long> orderIds) {
        if (orderIds == null || orderIds.isEmpty()) {
            return;
        }

        int order = 10; // Start the gap at 10

        for (Long id : orderIds) {
            Node node = nodeRepository.findById(id).orElse(null);
            if (node != null) {
                node.setDisplayOrder(order);
                nodeRepository.save(node);

                order += 10; // Increase by 10 for the next node
            }
        }
    }


    @Override
    public SlugValidationResponse validateSlug(String slug) {
        if (!slug.matches("^[a-z-]+$")) {
            return new SlugValidationResponse(
                    false,
                    "Slug can only contain lowercase letters, numbers, and hyphens"
            );
        }
        if (nodeRepository.existsBySlug(slug)) {
            return new SlugValidationResponse(
                    false,
                    "Slug is already taken"
            );
        }
        return new SlugValidationResponse(
                true,
                "Slug is valid and available"
        );
    }

}

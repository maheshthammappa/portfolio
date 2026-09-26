package me.maheshthammappa.portfolio.controllers;

import me.maheshthammappa.portfolio.dtos.*;
import me.maheshthammappa.portfolio.services.impl.NodeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nodes")
public class NodeController {
    private final NodeServiceImpl nodeService;

    public NodeController(NodeServiceImpl nodeService) {
        this.nodeService = nodeService;
    }

    @GetMapping("/{id}/tree")
    public ResponseEntity<NodeTreeDto> getNodeTree(@PathVariable("id") Long nodeId) {
        NodeTreeDto response = nodeService.getNodeTree(nodeId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NodeDto> getNodeById(@PathVariable("id") Long nodeId) {
        NodeDto response = nodeService.getNodeById(nodeId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<NodeResponseDto>> getChildren(@RequestParam(required = true) Long parentId) {
        List<NodeResponseDto> response = nodeService.getChildren(parentId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<NodeResponseDto> createNode(@RequestBody NodeRequestDto request) {
        NodeResponseDto response = nodeService.createNode(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<NodeResponseDto> updateNode(@RequestParam Long nodeId, @RequestBody NodeRequestDto request) {
        NodeResponseDto response = nodeService.updateNode(nodeId, request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteNode(@RequestParam Long nodeId) {
        Boolean response = nodeService.deleteNode(nodeId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/reorder")
    public ResponseEntity<Void> reOrderNodes(@RequestBody List<Long> orderIds) {
        nodeService.reOrderNodes(orderIds);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/validate-slug")
    public ResponseEntity<SlugValidationResponse> validateSlug(@RequestParam String slug) {
        return ResponseEntity.ok(nodeService.validateSlug(slug));
    }

}

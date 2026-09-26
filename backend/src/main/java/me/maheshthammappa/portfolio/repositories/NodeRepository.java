package me.maheshthammappa.portfolio.repositories;

import me.maheshthammappa.portfolio.entities.Node;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NodeRepository extends JpaRepository<Node, Long> {
    Integer findMaxDisplayOrderByParentId(Long aLong);

    boolean existsBySlug(String slug);

    List<Node> findByParentIdIsNullOrderByDisplayOrder();

    List<Node> findByParentIdOrderByDisplayOrder(Long parentId);
}

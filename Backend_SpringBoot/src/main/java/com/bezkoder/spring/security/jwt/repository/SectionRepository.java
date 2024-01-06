package com.bezkoder.spring.security.jwt.repository;
import com.bezkoder.spring.security.jwt.entity.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectionRepository extends JpaRepository<Section, Integer> {

    boolean existsByName(String name);

    boolean existsByNameAndIdNot(String name, Integer id);

    List<Section> findByType(Integer type);
}
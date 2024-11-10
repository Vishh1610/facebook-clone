package com.smediaclone.facebook_clone.repository;

import com.smediaclone.facebook_clone.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity, String> {
}

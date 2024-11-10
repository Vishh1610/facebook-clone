package com.smediaclone.facebook_clone.service;

import com.smediaclone.facebook_clone.model.Post;

import java.util.List;

public interface PostService{
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}

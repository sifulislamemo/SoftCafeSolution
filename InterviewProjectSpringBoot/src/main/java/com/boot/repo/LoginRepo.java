package com.boot.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boot.model.Login;

@Repository
public interface LoginRepo extends JpaRepository<Login, String> {

	Login findByUserName(String userName);
}

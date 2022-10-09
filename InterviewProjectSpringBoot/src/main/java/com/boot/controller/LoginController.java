package com.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.boot.model.Login;
import com.boot.repo.LoginRepo;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

	@Autowired
	private LoginRepo repo;

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Login loginData) {
		System.out.println(loginData);
		Login log = repo.findByUserName(loginData.getUserName());
		if (log.getPassWord().equals(loginData.getPassWord())) {
			return ResponseEntity.ok(log);
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
}

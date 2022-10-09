package com.boot.model;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "login")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Login {

	@Id
	
	private String userName;
	private String passWord;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

}

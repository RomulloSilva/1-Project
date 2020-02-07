package br.com.believeon.projeto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_administrador")
public class Administrador {
	
	@Column(name="emailAdmin")
	private String emailADM;
	@Column(name="senhaAdmin")
	private String senhaADM;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="iDAdmin")
	private int id;
	@Column(name="nomeAdmin")
	private String nome;



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmailADM() {
		return emailADM;
	}
	public void setEmailADM(String emailADM) {
		this.emailADM = emailADM;
	}
	public String getSenhaADM() {
		return senhaADM;
	}
	public void setSenhaADM(String senhaADM) {
		this.senhaADM = senhaADM;
	}

	public String toString() {
		return id+";"+nome+";"+emailADM;
	}

}
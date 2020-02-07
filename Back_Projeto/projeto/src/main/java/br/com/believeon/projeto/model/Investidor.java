package br.com.believeon.projeto.model;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="tbl_investidor")
public class Investidor {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idInv")
	private int idInv;
	
	@Column(name="nomeInv", length = 100)
	private String nome;
	
	@Column(name="emailInv", length = 100)
	private String email;
	
	@Column(name="senhaInv", length = 100)
	private String senha;
	
	@Column(name="telefoneInv", length = 100)
	private String telefone;
	
	@Column(name= "imgInv", length = 1000)
	private String imgInv;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "apoiador")
	@JsonIgnoreProperties("apoiador")
	private List<Projeto> projetos;
	
	
	public int getIdInv() {
		return idInv;
	}
	public void setIdInv(int idInv) {
		this.idInv = idInv;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getImgInv() {
		return imgInv;
	}
	public void setImgInv(String imgInv) {
		this.imgInv = imgInv;
	}
	
	public String toString() {
		return idInv+";"+nome+";"+email;
	}
	public List<Projeto> getProjetos() {
		return projetos;
	}
	public void setProjetos(List<Projeto> projetos) {
		this.projetos = projetos;
	}
	
	
}

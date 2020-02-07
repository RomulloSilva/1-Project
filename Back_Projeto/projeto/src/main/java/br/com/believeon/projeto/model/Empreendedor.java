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
@Table(name="tbl_empreendedor")
public class Empreendedor {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idEmp")
	private int idEmp;
	
	@Column(name="nomeEmp", length = 150)
	private String nomeEmp;

	@Column(name="emailEmp", length = 100)
	private String emailEmp;
	
	@Column(name="senhaEmp", length = 100)
	private String senhaEmp;
	
	@Column(name="telefoneEmp", length = 100)
	private String telefoneEmp;
	
	@Column(name= "imgEmp", length = 1000)
	private String imgEmp;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "dono") 
	@JsonIgnoreProperties("dono")
	private List<Projeto> projetos;
	
	
	
	public int getIdEmp() {
		return idEmp;
	}
	public void setIdEmp(int idEmp) {
		this.idEmp = idEmp;
	}
	public String getNomeEmp() {
		return nomeEmp;
	}
	public void setNomeEmp(String nomeEmp) {
		this.nomeEmp = nomeEmp;
	}
	public String getEmailEmp() {
		return emailEmp;
	}
	public void setEmailEmp(String emailEmp) {
		this.emailEmp = emailEmp;
	}
	public String getSenhaEmp() {
		return senhaEmp;
	}
	public void setSenhaEmp(String senhaEmp) {
		this.senhaEmp = senhaEmp;
	}
	public String getTelefoneEmp() {
		return telefoneEmp;
	}
	public void setTelefoneEmp(String telefoneEmp) {
		this.telefoneEmp = telefoneEmp;
	}
	public List<Projeto> getProjetos() {
		return projetos;
	}
	public void setProjetos(List<Projeto> projetos) {
		this.projetos = projetos;
	}
	public String getImgEmp() {
		return imgEmp;
	}
	public void setImgEmp(String imgEmp) {
		this.imgEmp = imgEmp;
	}
	
	public String toString() {
		return idEmp+";"+nomeEmp+";"+emailEmp;
	}
	
	
	
}

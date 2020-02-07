package br.com.believeon.projeto.model;

/*import java.util.List;*/

/*import javax.persistence.CascadeType;*/
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
/*import javax.persistence.OneToMany;*/
import javax.persistence.Table;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="tbl_projeto")
public class Projeto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idProj")
	private int idProj;
	
	@Column(name="nomeProj", length = 100)
	private String nomeProj;
	
	@Column(name="descricaoProj" ,length = 200)
	private String descricaoProj;
	
	@Column(name="valorProj", length = 16)
	private String valorProj;
	
	@Column(name="linkFoto", length = 200)
	private String linkFoto;
	
	
	@ManyToOne
	@JsonIgnoreProperties ("projetos")
	private Empreendedor dono;
	
	@ManyToOne
	@JsonIgnoreProperties ("projetos")
	private Categoria categoriaProjeto;
	
	@ManyToOne
	@JsonIgnoreProperties("projetos")
	private Investidor apoiador;
	
	/*@OneToMany(cascade = CascadeType.ALL, mappedBy = "projeto")
	@JsonIgnoreProperties ("projeto")
	private List<Meta> metasProjeto;*/

	public int getIdProj() {
		return idProj;
	}

	public void setIdProj(int idProj) {
		this.idProj = idProj;
	}

	public String getNomeProj() {
		return nomeProj;
	}

	public void setNomeProj(String nomeProj) {
		this.nomeProj = nomeProj;
	}

	public String getDescricaoProj() {
		return descricaoProj;
	}

	public void setDescricaoProj(String descricaoProj) {
		this.descricaoProj = descricaoProj;
	}

	public String getValorProj() {
		return valorProj;
	}

	public void setValorProj(String valorProj) {
		this.valorProj = valorProj;
	}

	public String getLinkFoto() {
		return linkFoto;
	}

	public void setLinkFoto(String linkFoto) {
		this.linkFoto = linkFoto;
	}

	public Empreendedor getDono() {
		return dono;
	}

	public void setDono(Empreendedor dono) {
		this.dono = dono;
	}



	public Categoria getCategoriaProjeto() {
		return categoriaProjeto;
	}

	public void setCategoriaProjeto(Categoria categoriaProjeto) {
		this.categoriaProjeto = categoriaProjeto;
	}

	public Investidor getApoiador() {
		return apoiador;
	}

	public void setApoiador(Investidor apoiador) {
		this.apoiador = apoiador;
	}

	/*public List<Meta> getMetasProjeto() {
		return metasProjeto;
	}

	public void setMetasProjeto(List<Meta> metasProjeto) {
		this.metasProjeto = metasProjeto;
	}*/
	
	

}

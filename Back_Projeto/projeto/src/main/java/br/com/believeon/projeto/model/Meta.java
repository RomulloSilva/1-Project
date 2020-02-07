/* package br.com.believeon.projeto.model;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name = "tbl_meta")
public class Meta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idMeta")
	private int idMeta;
	
	@Column(name="tipoMeta", length = 100)
	private String tipoMeta;
	
	@Column(name="percentMeta", length = 100)
	private String percentMeta;
	
	@Column(name="valorMeta", length = 100)
	private String valorMeta;
	
	//private boolean situacao;
	
	
	@ManyToOne
	@JsonIgnoreProperties ("metasProjeto")
	private Projeto projeto;
	
	
	public int getIdMeta() {
		return idMeta;
	}

	public void setIdMeta(int idMeta) {
		this.idMeta = idMeta;
	}

	public String getTipoMeta() {
		return tipoMeta;
	}

	public void setTipoMeta(String tipoMeta) {
		this.tipoMeta = tipoMeta;
	}

	public String getPercentMeta() {
		return percentMeta;
	}

	public void setPercentMeta(String percentMeta) {
		this.percentMeta = percentMeta;
	}

	public String getValorMeta() {
		return valorMeta;
	}

	public void setValorMeta(String valorMeta) {
		this.valorMeta = valorMeta;
	}

	
	
}

*/
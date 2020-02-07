package br.com.believeon.projeto.dao;



import org.springframework.data.repository.CrudRepository;

import br.com.believeon.projeto.model.Empreendedor;

public interface EmpreendedorRepo extends CrudRepository <Empreendedor, Integer> {
	
	public Empreendedor findByEmailEmpAndSenhaEmp(String emailEmp, String senhaEmp);
	
}

package br.com.believeon.projeto.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.believeon.projeto.model.Investidor;

public interface InvestidorRepo extends CrudRepository<Investidor,Integer>{

	public Investidor findByEmailAndSenha(String email, String senha);
	
}

package br.com.believeon.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.believeon.projeto.dao.InvestidorRepo;
import br.com.believeon.projeto.model.Investidor;


@Component
public class InvestidorServiceImpl implements IInvestidorService{
	
	@Autowired
	private InvestidorRepo repo;
	
	public void adicionarNovoInvestidor(Investidor investidor) {
		repo.save(investidor);
}

	public List<Investidor> recuperarTodos(){
		return (List<Investidor>) repo.findAll();
	}
	

	public Investidor recuperarInvPorId(int idInv) {
		return repo.findById(idInv).get();
	}
	
	public void atualizarInvestidor(Investidor investidor) {
		repo.save(investidor);
	}
	
	@Override
	public Investidor loginInvestidor(String email, String senha) {
		return repo.findByEmailAndSenha(email, senha);
	}
	
	
	
	
}

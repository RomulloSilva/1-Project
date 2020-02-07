package br.com.believeon.projeto.service;


import java.util.List;

import br.com.believeon.projeto.model.Investidor;

public interface IInvestidorService {
	public void adicionarNovoInvestidor (Investidor investidor);
	public List<Investidor> recuperarTodos();
	public Investidor recuperarInvPorId(int idInv);
	public void atualizarInvestidor(Investidor investidor);
	public Investidor loginInvestidor(String email, String senha);
	
}

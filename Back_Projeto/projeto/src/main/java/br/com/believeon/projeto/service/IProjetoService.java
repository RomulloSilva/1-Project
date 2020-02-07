package br.com.believeon.projeto.service;

import java.util.List;

import br.com.believeon.projeto.model.Projeto;

public interface IProjetoService {
	
	public List<Projeto> recuperarTodos();
	
	public Projeto recuperarPorId(int idProj);

	public void adicionarNovoProjeto(Projeto projeto);
	
	public void atualizarprojeto(Projeto projeto);
};

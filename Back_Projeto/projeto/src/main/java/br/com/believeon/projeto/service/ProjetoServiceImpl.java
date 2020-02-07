package br.com.believeon.projeto.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.believeon.projeto.dao.ProjetoRepo;
import br.com.believeon.projeto.model.Projeto;

@Component
public class ProjetoServiceImpl implements IProjetoService {

	@Autowired
	private ProjetoRepo repo;

	@Override
	public List<Projeto> recuperarTodos() {

		return (List<Projeto>) repo.findAll();
	}

	@Override
	public Projeto recuperarPorId(int idProj) {

		return repo.findById(idProj).get();
	}

	public void adicionarNovoProjeto(Projeto projeto) {
		repo.save(projeto);

	}
	
	public void atualizarprojeto(Projeto projeto) {
		repo.save(projeto);
	}
	
}

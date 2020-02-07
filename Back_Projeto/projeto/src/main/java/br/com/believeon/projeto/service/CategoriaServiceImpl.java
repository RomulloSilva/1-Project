package br.com.believeon.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.believeon.projeto.dao.CategoriaRepo;

import br.com.believeon.projeto.model.Categoria;

@Component
public class CategoriaServiceImpl implements ICategoriaService{
	
	@Autowired
	private CategoriaRepo repo;
	
	public void adicionarNovoCategoria(Categoria categoria) {
		repo.save(categoria);
}
	
	
	public List<Categoria> recuperarTodos(){
		return (List<Categoria>) repo.findAll();

	}
	
	
	public Categoria recuperaCatId(int idCat) {
		return repo.findById(idCat).get();
	}
}


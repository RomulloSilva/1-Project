package br.com.believeon.projeto.service;

import java.util.List;

import br.com.believeon.projeto.model.Categoria;

public interface ICategoriaService {
	
	public void adicionarNovoCategoria (Categoria categoria);
	
	public Categoria recuperaCatId(int idCat);
	
	public List<Categoria> recuperarTodos();
}

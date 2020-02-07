package br.com.believeon.projeto.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.model.Categoria;
import br.com.believeon.projeto.service.ICategoriaService;


@RestController
@CrossOrigin("*")
public class CategoriaController{
	
	@Autowired
	private ICategoriaService service;
	
	@PostMapping("/categoria/novo")
	public ResponseEntity<Categoria> incluirNovo(@RequestBody Categoria categoria){
		service.adicionarNovoCategoria(categoria);
		return ResponseEntity.ok(categoria);
	}
	
	
	@GetMapping("/categoria/todos")
	public ResponseEntity<List<Categoria>> mostrarTodos(){
		return ResponseEntity.ok(service.recuperarTodos());
	}
	
	@GetMapping("/categoria/{idCat}")
	public ResponseEntity<Categoria> mostrarPeloId(@PathVariable int idCat){
		Categoria a = service.recuperaCatId(idCat);
		if(a != null) {
			return ResponseEntity.ok(a);
		}
		return ResponseEntity.notFound().build();
			
	}
	
}
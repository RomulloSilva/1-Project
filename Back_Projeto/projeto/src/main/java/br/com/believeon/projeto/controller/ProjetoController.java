package br.com.believeon.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.model.Projeto;
import br.com.believeon.projeto.service.IProjetoService;

@RestController
@CrossOrigin("*")
public class ProjetoController {
	

	@Autowired
	private IProjetoService service;

	

	@GetMapping("/projetos/todos")
	public ResponseEntity<List<Projeto>> mostrarTodos(){
		return ResponseEntity.ok(service.recuperarTodos());
	}
	

	@GetMapping("/projetos/{idProj}")
	public ResponseEntity<Projeto> mostrarPeloId(@PathVariable int idProj){
		Projeto a = service.recuperarPorId(idProj);
		
		if(a != null) {
			return ResponseEntity.ok(a);
		}
		return ResponseEntity.notFound().build();
	}
	
		@PostMapping("/projeto/novo")
		public ResponseEntity<Projeto> incluirNovo(@RequestBody Projeto projeto){
			service.adicionarNovoProjeto(projeto);
			return ResponseEntity.ok(projeto);
		}
		
		
		@PutMapping("/projetos/atualizar")
		public ResponseEntity<Projeto> atualizarPeloId(@RequestBody Projeto projeto){
		    service.atualizarprojeto(projeto);
		    return ResponseEntity.ok(projeto);
			
		}
}

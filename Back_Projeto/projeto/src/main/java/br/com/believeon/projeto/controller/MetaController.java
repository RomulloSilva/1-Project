/* package br.com.believeon.projeto.controller;




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

import br.com.believeon.projeto.model.Meta;
import br.com.believeon.projeto.service.IMetaService;

@RestController
@CrossOrigin("*")
public class MetaController {
	
	@Autowired
	private IMetaService service;
	
	@PostMapping("/meta/novo")
	public ResponseEntity<Meta> incluirNovo(@RequestBody Meta meta){
		service.adicionarNovoMeta(meta);
		return ResponseEntity.ok(meta);
	}
	
	@GetMapping("/meta/{idMeta}")
	public ResponseEntity<Meta> mostrarPeloId(@PathVariable int idMeta){
		Meta a = service.RecuperaPorId(idMeta);
		
		if(a != null) {
			return ResponseEntity.ok(a);
		}
		return ResponseEntity.notFound().build();
	}
	
	
	@PutMapping("/meta/atualizar")
	public ResponseEntity<Meta> atualizarPeloId(@RequestBody Meta meta){
	    service.atualizarMeta(meta);
	    return ResponseEntity.ok(meta);
		
	}
	
	
	@GetMapping("/meta/todos")
	public ResponseEntity<List<Meta>> mostrarTodos(){
		return ResponseEntity.ok(service.recuperarTodos());
	}
	
	
}

 */